import { DAYS_OF_WEEK } from '@/constants'

const getLastDayOfWeek = (indexOfFirstDayOfWeek: number) =>
  (DAYS_OF_WEEK.length - 1 + indexOfFirstDayOfWeek) % DAYS_OF_WEEK.length
export { getLastDayOfWeek }
