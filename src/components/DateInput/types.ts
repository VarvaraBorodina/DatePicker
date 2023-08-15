type DateInputProps = {
  title: string
  stringDataError: (dateString: string) => string
  changeDate: (dateString: string) => void
}

export { DateInputProps }
