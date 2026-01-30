import { getAllRecipes } from '../lib/api';
import RecipeCard from '../components/RecipeCard';
import Layout from '../components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home({ recipes }) {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <section className="py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">{t('featured_recipes')}</h1>
          <p className="text-gray-500">Curated dishes just for you.</p>
        </div>
        
        <div 
          data-test-id="featured-recipes" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.sys.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const recipes = await getAllRecipes(locale);
  const featured = recipes.filter(r => r.fields.featured);

  return {
    props: {
      recipes: featured,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
}