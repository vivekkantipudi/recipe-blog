import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import NewsletterForm from './NewsletterForm';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <header className="border-b bg-white sticky top-0 z-10 print:hidden">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tight">FoodBlog</Link>
          <nav className="flex items-center gap-6">
            <Link href="/recipes" className="font-medium hover:text-blue-600">All Recipes</Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      <main className="flex-grow w-full max-w-5xl mx-auto p-4">
        {children}
      </main>

      <footer className="border-t py-12 bg-gray-50 mt-12 print:hidden">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">FoodBlog</h4>
            <p className="text-gray-600 max-w-xs">Simple, delicious recipes for everyone. No API keys required.</p>
          </div>
          <div>
            <NewsletterForm />
          </div>
        </div>
      </footer>
    </div>
  );
}