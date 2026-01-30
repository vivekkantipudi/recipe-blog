import { getAllRecipes } from '../lib/api';

const EXTERNAL_DATA_URL = 'http://localhost:3000';

function generateSiteMap(recipes) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url><loc>${EXTERNAL_DATA_URL}</loc></url>
     <url><loc>${EXTERNAL_DATA_URL}/recipes</loc></url>
     ${recipes.map(({ fields }) => `
       <url><loc>${EXTERNAL_DATA_URL}/recipes/${fields.slug}</loc></url>
       <url><loc>${EXTERNAL_DATA_URL}/es/recipes/${fields.slug}</loc></url>
       <url><loc>${EXTERNAL_DATA_URL}/fr/recipes/${fields.slug}</loc></url>
     `).join('')}
   </urlset>`;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const recipes = await getAllRecipes('en');
  const sitemap = generateSiteMap(recipes);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default SiteMap;