import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
export type Locale = 'es' | 'en'

// Can be imported from a shared config
export const locales = ['en', 'es'];
export const localePrefix = 'always'; // Default
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});