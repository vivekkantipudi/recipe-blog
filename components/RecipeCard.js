import Link from 'next/link';
import Image from 'next/image';

export default function RecipeCard({ recipe, locale }) {
  const { title, slug, image, description, category } = recipe.fields;
  const imageUrl = image?.fields?.file?.url 
    ? `https:${image.fields.file.url}` 
    : 'https://placehold.co/600x400';

  return (
    <div data-test-id="recipe-card" className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-wide">{category}</span>
        <h3 className="text-xl font-bold mt-1 mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        <Link 
          href={`/recipes/${slug}`} 
          locale={locale}
          className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
        >
          View Recipe &rarr;
        </Link>
      </div>
    </div>
  );
}