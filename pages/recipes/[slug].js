import { getAllRecipes, getRecipeBySlug } from '../../lib/api';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function RecipeDetail({ recipe }) {
  const { t } = useTranslation('common');
  const router = useRouter();

  if (!recipe) return <Layout><div className="p-10 text-center">Loading...</div></Layout>;

  const { title, ingredients, instructions, image } = recipe.fields;
  const imageUrl = image?.fields?.file?.url ? `https:${image.fields.file.url}` : 'https://placehold.co/800x600';
  
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const shareUrl = `${origin}${router.asPath}`;
  const twitterShareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;

  return (
    <Layout>
      <article className="max-w-3xl mx-auto py-8">
        <h1 data-test-id="recipe-title" className="text-4xl font-bold mb-6 text-gray-900">{title}</h1>
        
        <div className="relative w-full h-80 mb-8 rounded-xl overflow-hidden shadow-lg bg-gray-100">
          <Image src={imageUrl} alt={title} fill className="object-cover" priority />
        </div>

        <div className="flex gap-4 mb-8 print:hidden border-b pb-6">
          <a 
            data-test-id="social-share-twitter" 
            href={twitterShareLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1DA1F2] text-white px-4 py-2 rounded-full font-bold text-sm hover:opacity-90 transition"
          >
            Share on Twitter
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <h2 data-test-id="ingredients-heading" className="text-2xl font-bold mb-4 border-b pb-2">{t('ingredients')}</h2>
            <ul data-test-id="recipe-ingredients" className="space-y-2">
              {ingredients.map((ing, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">{t('instructions')}</h2>
            <div data-test-id="recipe-instructions" className="prose max-w-none text-gray-700 leading-relaxed">
              <p>{instructions}</p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const recipes = await getAllRecipes('en');
  const paths = [];
  recipes.forEach((recipe) => {
    locales.forEach((locale) => {
      paths.push({ params: { slug: recipe.fields.slug }, locale });
    });
  });
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params, locale }) {
  const recipe = await getRecipeBySlug(params.slug, locale);
  if (!recipe) return { notFound: true };

  return {
    props: {
      recipe,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
}