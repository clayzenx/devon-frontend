export function usePage() {
  const page = useState<number>('page', () => 1)
  const set = (n: number) => page.value = n

  return {
    page,
    set
  }
}

