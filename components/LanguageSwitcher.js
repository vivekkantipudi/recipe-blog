import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale: activeLocale } = router;

  return (
    <div data-test-id="language-switcher" className="flex gap-2">
      {router.locales.map((locale) => (
        <Link
          key={locale}
          href={{ pathname, query }}
          as={asPath}
          locale={locale}
          className={`px-3 py-1 rounded text-sm font-medium ${
            activeLocale === locale 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300 text-black'
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}