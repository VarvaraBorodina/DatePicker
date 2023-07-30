type SelectDataFormProps = {
  isValidDate: (dateString: string) => boolean
  changeCurrentDate: (dateString: string) => void
  changeFromDate: (dateString: string) => void
  changeToDate: (dateString: string) => void
}

export { SelectDataFormProps }
