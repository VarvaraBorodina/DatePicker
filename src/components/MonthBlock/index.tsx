import React, { useState } from 'react'
import { Dates, Day, Month } from './styled'
import CalendarHeader from '../CalendarHeader'
import CalendarType from '../../constants/calendarType'
import MonthBlockProps from './types'
import DaysNames from '../DaysNames'
import TodoList from '../TodoList'
import { Todo } from '../../services/types'

const MonthBlock: React.FC<MonthBlockProps> = ({
  blockDates,
  title,
  handleNextRange,
  handlePrevRange,
  getDayType,
  type,
  firstDayOfWeek,
  getDayTodos,
  saveDayTodo,
  isTodoListAvailable,
  nextDisable,
  prevDisable,
}) => {
  const [dayOnModal, setDayOnModal] = useState<Date | null>(null)

  const handleOnDayClick = (day: Date) => () => {
    if (isTodoListAvailable) {
      setDayOnModal(day)
    }
  }

  const handleOnClose = () => {
    setDayOnModal(null)
  }

  const handleOnSave = (day: Date) => (todo: Todo) => {
    saveDayTodo(day, todo)
  }

  if (!dayOnModal) {
    return (
      <Month key={title}>
        <CalendarHeader
          title={title}
          onPrevious={handlePrevRange}
          onNext={handleNextRange}
          withArrows={type !== CalendarType.year}
          nextDisable={nextDisable}
          prevDisable={prevDisable}
        />
        <DaysNames firstDayOfWeek={firstDayOfWeek} />
        <Dates>
          {blockDates.map((day) => (
            <Day
              key={day.toISOString()}
              $dayType={getDayType(day)}
              $hasTodo={getDayTodos(day).length > 0}
              onClick={handleOnDayClick(day)}
            >
              {day.getDate()}
            </Day>
          ))}
        </Dates>
      </Month>
    )
  }
  return (
    <TodoList
      day={dayOnModal}
      handleOnClose={handleOnClose}
      handleOnSave={handleOnSave(dayOnModal)}
      todos={getDayTodos(dayOnModal)}
    />
  )
}

export default MonthBlock
