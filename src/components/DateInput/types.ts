type DateInputProps = {
  title: string
  isValidDate: (dateString: string) => boolean
  changeDate: (dateString: string) => void
}

export { DateInputProps }
