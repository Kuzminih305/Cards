import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Card, ControlledTextField, Typography } from '../../ui'

import s from './recover-password.module.scss'

const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
})

type FormType = z.infer<typeof schema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const RecoverPassword: FC<Props> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<FormType>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  })
  const handleFormSubmitted = handleSubmit(onSubmit)

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography variant="large" className={s.title}>
          Forgot your password?
        </Typography>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.form}>
            <ControlledTextField
              placeholder={'Email'}
              label={'Email'}
              name={'email'}
              control={control}
            />
          </div>
          <Typography variant="body2" as={'p'} className={s.infoInstruction}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Send Instructions
          </Button>
        </form>
        <Typography className={s.question} variant="body2">
          {`Did you remember your password?`}
        </Typography>
        <Typography variant="link1" as={'p'} className={s.tryLogging}>
          Try logging in
        </Typography>
      </Card>
    </>
  )
}
