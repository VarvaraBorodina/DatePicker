const isDatesEqual = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  )
}

const isEarlier = (date1: Date, date2: Date): boolean => {
  return (
    new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) <
    new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
  )
}

export { isDatesEqual, isEarlier }
