import type { Meta, StoryObj } from '@storybook/react'
import CalendarType from '../../constants/calendarType'

import Calendar from './index'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Calendar',
}

export default meta

type Story = StoryObj<typeof meta>
export const Week: Story = {
  args: { color: '#f70279', type: CalendarType.week },
}
export const Base: Story = {
  args: { color: '#f70279', type: CalendarType.month },
}
export const Year: Story = {
  args: { color: '#f70279', type: CalendarType.year },
}
