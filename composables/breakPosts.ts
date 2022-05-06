interface Result<T> {
  justNow: T[];
  today: T[];
  yesterday: T[];
  lastWeek: T[];
  later: T[]
}

const getHours = (date: number) => Math.round(date / 1000 / 60 / 60)

/**
 * Splits the data array by time intervals
 * (justNow, today, yesterday, lastWeek, later)
 *
 * @param data - data array with date key
 * 
 * @example
 * `const data = breakData(data) // { justNow:[...], today:[...],... }`
 */
export const breakData = <T>(data: T[]): Result<T> => {
  let justNow: T[] = [], today: T[] = [], yesterday: T[] = [], lastWeek: T[] = [], later: T[] = [];

  (data as Array<any>).forEach(item => {
    const date = +new Date(item.date)
    const now = Date.now()
    const lifeTime = getHours(now - date)
    if (lifeTime < 1) justNow.push(item)
    else if (lifeTime < 24) today.push(item)
    else if (lifeTime < 48) yesterday.push(item)
    else if (lifeTime < 168) lastWeek.push(item)
    else later.push(item);
  })

  return {
    justNow,
    today,
    yesterday,
    lastWeek,
    later
  }

} 
