import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

export default function NewsletterForm() {
  const { t } = useTranslation('common');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log("Subscribing:", data);
    setIsSuccess(true);
  };

  return (
    <div className="p-4 border rounded bg-white">
      <h3 className="font-bold mb-2">{t('newsletter_title')}</h3>
      
      {isSuccess ? (
        <div data-test-id="newsletter-success" className="text-green-600 font-bold p-2 bg-green-50 rounded">
          {t('newsletter_success')}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} data-test-id="newsletter-form" className="flex flex-col gap-2">
          <input
            {...register("email", { 
              required: true, 
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
            })}
            data-test-id="newsletter-email"
            placeholder="email@example.com"
            className="p-2 border rounded"
          />
          {errors.email && (
            <span data-test-id="newsletter-error" className="text-red-500 text-sm">
              {t('newsletter_error')}
            </span>
          )}
          <button 
            type="submit" 
            data-test-id="newsletter-submit"
            className="bg-black text-white p-2 rounded hover:bg-gray-800 transition"
          >
            {t('subscribe')}
          </button>
        </form>
      )}
    </div>
  );
}