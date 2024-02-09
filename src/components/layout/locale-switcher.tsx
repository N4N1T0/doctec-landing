import { useLocale, useTranslations } from 'next-intl';
import { Locale, locales } from '@/i18n';
import LocaleSwitcherSelect from './locale-switch-select';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale() as Locale

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}