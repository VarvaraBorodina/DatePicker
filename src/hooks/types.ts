type UseServiceType = [
  Date,
  Date[][],
  () => void,
  () => void,
  (newDate: string) => void,
]

type UseDatesRangeType = [
  Date | null,
  Date | null,
  (newDate: string) => void,
  (newDate: string) => void,
]

export { UseServiceType, UseDatesRangeType }
