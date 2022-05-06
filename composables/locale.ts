import { ComputedRef } from "nuxt/dist/app/compat/capi"

export function useLocale() {
  const locale = useStorage<ILocale>('locale', 'en')
  const _locales: ILocale[] = ['en', 'ru'];
  const set = (loc: ILocale) => (locale.value = loc, window.location.reload())

  const locales: ComputedRef<ILocale[]> = computed(() => _locales.filter(loc => loc !== useLocale().locale.value))

  return {
    locale,
    locales,
    set
  }
}

