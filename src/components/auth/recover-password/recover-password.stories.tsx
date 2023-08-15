import { Meta, StoryObj } from '@storybook/react'

import { RecoverPassword } from './recover-password'

const meta = {
  title: 'Auth/RecoverPassword',
  component: RecoverPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof RecoverPassword>

export default meta
type Story = StoryObj<typeof meta>
export const Recover_Password: Story = {}
