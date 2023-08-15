import { Meta, StoryObj } from '@storybook/react'

import { NewPassword } from './new-password'

const meta = {
  title: 'Auth/NewPassword',
  component: NewPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Sign_In: Story = {}
