import ar from './ar.json';
import en from './en.json';
import fr from './fr.json';

export type Language = 'ar' | 'en' | 'fr';

const translations: Record<Language, Record<string, string>> = { ar, en, fr };

// يرجع الترجمة المطلوبة، ولو مش موجودة بيرجع النص العربي كافتراضي
export function t(key: string, lang: Language = 'ar'): string {
  return translations[lang]?.[key] ?? translations.ar[key] ?? key;
}
