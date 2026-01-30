import { useState } from 'react';
import { getAllRecipes } from '../../lib/api';
import RecipeCard from '../../components/RecipeCard';
import Layout from '../../components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Recipes({ initialRecipes }) {
  const { t } = useTranslation('common');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(initialRecipes.map(r => r.fields.category).filter(Boolean))];

  const filteredRecipes = initialRecipes.filter(recipe => {
    const matchesSearch = recipe.fields.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? recipe.fields.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-6">{t('all_recipes')}</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-gray-50 rounded-lg border">
          <input
            type="text"
            data-test-id="search-input"
            placeholder={t('search_placeholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-3 rounded flex-grow outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <select
            data-test-id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-3 rounded w-full md:w-48 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">{t('all_categories')}</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.sys.id} recipe={recipe} />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500 py-12">No recipes found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const recipes = await getAllRecipes(locale);
  return {
    props: {
      initialRecipes: recipes,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}