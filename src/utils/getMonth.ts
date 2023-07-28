const getMonth = (monthDates: Date[]): number => {
  let i = 0
  while (monthDates[i].getDate() !== 1) {
    i += 1
  }
  return monthDates[i].getMonth()
}

export default getMonth
