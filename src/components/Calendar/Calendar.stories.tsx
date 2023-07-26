import type { Meta, StoryObj } from '@storybook/react'

import Calendar from './index'

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'Calendar',
}

export default meta

type Story = StoryObj<typeof meta>
export const Base: Story = { args: {} }
