import type { Meta, StoryObj } from '@storybook/react'

import CalendarType from '@/constants/calendarType'
import FirstDayOfWeek from '@/constants/firstDayOfWeek'

import Calendar from './index'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Calendar',
}

export default meta

const min = new Date(2022, 5, 1)
const max = new Date(2023, 9, 20)

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: { max },
}

export const Week: Story = {
  args: { color: '#FBB714', type: CalendarType.week, todoList: true, min, max },
}

export const Year: Story = {
  args: {
    color: '#61EB66',
    type: CalendarType.year,
    todoList: true,
    min,
    max,
    weekends: true,
    daysOff: true,
    firstDayOfWeek: FirstDayOfWeek.sunday,
  },
}
