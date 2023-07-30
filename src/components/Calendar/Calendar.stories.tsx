import type { Meta, StoryObj } from '@storybook/react'
import CalendarType from '../../constants/calendarType'

import Calendar from './index'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Calendar',
}

export default meta

const min = new Date(2022, 5, 1)
const max = new Date(2025, 9, 1)

type Story = StoryObj<typeof meta>
export const Week: Story = {
  args: { color: '#f70279', type: CalendarType.week, todoList: true, min, max },
}
export const Base: Story = {
  args: {
    color: '#f70279',
    type: CalendarType.month,
    todoList: true,
    min,
    max,
  },
}
export const Year: Story = {
  args: { color: '#f70279', type: CalendarType.year, todoList: true, min, max },
}
