export const fallbackLng = 'th'
export const languages = [fallbackLng, 'en']
export const cookieName = 'i18next-lang'

export function getOptions (lng: string = fallbackLng, ns: string = 'home') {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    ns
  }
}