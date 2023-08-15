type SelectDataFormProps = {
  stringDataError: (dateString: string) => string
  changeCurrentDate: (dateString: string) => void
  changeFromDate: (dateString: string) => void
  changeToDate: (dateString: string) => void
}

export { SelectDataFormProps }
