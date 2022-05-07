export function usePage() {
  const page = useState<number>('page', () => 1)
  const set = (p: number) => page.value = p

  return {
    page,
    set
  }
}

