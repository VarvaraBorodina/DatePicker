import React, { useState } from 'react'

import CalendarHeader from '@/components/CalendarHeader'
import DaysNames from '@/components/DaysNames'
import TodoList from '@/components/TodoList'
import { CalendarType, DayType } from '@/constants'
import { Todo } from '@/services'

import { Dates, Day, Month } from './styled'
import MonthBlockProps from './types'

const MonthBlock: React.FC<MonthBlockProps> = (props) => {
  const {
    blockDates,
    title,
    handleNextRange,
    handlePrevRange,
    getDayType,
    type,
    firstDayOfWeek,
    getDayTodos,
    saveDayTodo,
    deleteDayTodo,
    isTodoListAvailable,
    nextDisable,
    prevDisable,
    isDayInRange,
  } = props
  const [dayOnModal, setDayOnModal] = useState<Date | null>(null)

  const handleOnDayClick = (day: Date) => () => {
    const isAnotherMonth =
      getDayType(day) === DayType.anotherMonth ||
      getDayType(day) === DayType.anotherMonthWeekend
    if (isTodoListAvailable && !isAnotherMonth && isDayInRange(day)) {
      setDayOnModal(day)
    }
  }

  const handleOnClose = () => {
    setDayOnModal(null)
  }

  const handleOnSave = (day: Date) => (todo: Todo) => {
    saveDayTodo(day, todo)
  }

  const handleOnDelete = (day: Date) => (id: number) => {
    deleteDayTodo(day, id)
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
      handleOnDelete={handleOnDelete(dayOnModal)}
      todos={getDayTodos(dayOnModal)}
    />
  )
}

export default MonthBlock
