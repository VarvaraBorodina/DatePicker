import React, { useState } from 'react'
import { Dates, Day, Month } from './styled'
import CalendarHeader from '../CalendarHeader'
import CalendarType from '../../constants/calendarType'
import MonthBlockProps from './types'
import DaysNames from '../DaysNames'
import TodoList from '../TodoList'

const MonthBlock: React.FC<MonthBlockProps> = ({
  blockDates,
  title,
  handleNextRange,
  handlePrevRange,
  getDayType,
  type,
  firstDayOfWeek,
  daysWithTodos,
}) => {
  const [dayOnModal, setDayOnModal] = useState<Date | null>(null)

  const handleOnDayClick = (day: Date) => () => {
    setDayOnModal(day)
  }
  if (!dayOnModal) {
    return (
      <Month key={title}>
        <CalendarHeader
          title={title}
          onPrevious={handlePrevRange}
          onNext={handleNextRange}
          withArrows={type !== CalendarType.year}
        />
        <DaysNames firstDayOfWeek={firstDayOfWeek} />
        <Dates>
          {blockDates.map((day) => (
            <Day
              key={day.getTime()}
              $dayType={getDayType(day)}
              $hasTodo={daysWithTodos.includes(day.toString())}
              onClick={handleOnDayClick(day)}
            >
              {day.getDate()}
            </Day>
          ))}
        </Dates>
      </Month>
    )
  }
  return <TodoList />
}

export default MonthBlock
