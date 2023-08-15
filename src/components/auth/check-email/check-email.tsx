import { FC } from 'react'

import Email from '../../../assets/icons/email'
import { Button, Card, Typography } from '../../ui'

import s from './check-email.module.scss'

type Props = {
  email: string
}

export const CheckEmail: FC<Props> = ({ email }) => {
  const message = `We've sent an e-mail with instructions to ${email}`

  return (
    <Card className={s.card}>
      <Typography variant="large" className={s.title}>
        Check email
      </Typography>
      <div className={s.iconContainer}>
        <Email />
      </div>
      <Typography variant="body2" className={s.instructions}>
        {message}
      </Typography>
      <Button fullWidth as={'a'}>
        Back to Sign in
      </Button>
    </Card>
  )
}
