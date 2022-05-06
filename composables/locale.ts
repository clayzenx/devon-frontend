export function useLocale() {
  const locale = useState<ILocale>('locale', () => 'en')

  const set = (loc: ILocale) => locale.value = loc

  return {
    locale,
    set
  }
}

