const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const LONG_MONTHES = [0, 2, 4, 6, 7, 9, 11]

enum DayAmountInMonth {
  ShortFebruary = 28,
  LongFebruary = 29,
  Short = 30,
  Long = 31,
}

export { DayAmountInMonth, LONG_MONTHES, MONTH_NAMES }
