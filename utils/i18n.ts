export const defaultLanguage = 'ko';

export const languages = ['ko'];
export const contentLanguageMap = {ko: 'ko-KR'};
export const localedPages: string[] = ['index'];

export const getLocalesFromPages = async (
  locale: string,
  ...pages: string[]
) => {
  const locales = await Promise.all(
    pages.map(
      async page => (await import(`../locales/${page}/${locale}.yml`)).default
    )
  );
  return Object.assign({}, ...locales);
};
