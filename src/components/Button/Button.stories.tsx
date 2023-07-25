import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
}

export default meta

type Story = StoryObj<typeof meta>
export const Base: Story = { args: { label: 'button' } }
export const Input: Story = { args: { label: 'input' } }
export const Delete: Story = { args: { label: 'delete' } }
