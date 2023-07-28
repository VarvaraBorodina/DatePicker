const getMonth = (blockDates: Date[], currentDate: Date): number => {
  let i = 0
  if (blockDates.length === 7) {
    return currentDate.getMonth()
  }
  while (blockDates[i].getDate() !== 1) {
    i += 1
  }
  return blockDates[i].getMonth()
}

export default getMonth
