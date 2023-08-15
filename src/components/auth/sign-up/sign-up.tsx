import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Card, ControlledTextField, Typography } from '../../ui/index'

import s from './sign-up.module.scss'

const sigUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  })

type SignUpFormShem = z.infer<typeof sigUpSchema>
type Props = {
  onSubmit: (data: SignUpFormShem) => void
}
export const SignUp = (props: Props) => {
  const { control, handleSubmit } = useForm<SignUpFormShem>({
    resolver: zodResolver(sigUpSchema),
  })

  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography variant="large" className={s.title}>
          Sign Up
        </Typography>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.form}>
            <ControlledTextField
              placeholder={'Email'}
              label={'Email'}
              name={'email'}
              control={control}
            />
            <ControlledTextField
              placeholder={'Password'}
              label={'Password'}
              type={'password'}
              name={'password'}
              control={control}
            />
            <ControlledTextField
              placeholder={'Confirm Password'}
              label={'Confirm Password'}
              type={'password'}
              name={'confirmPassword'}
              control={control}
            />
          </div>
          <Button className={s.button} fullWidth type={'submit'}>
            Sign In
          </Button>
        </form>
        <Typography className={s.caption} variant="body2">
          {`Already have an account?`}
        </Typography>
        <Typography variant="link1" as={'p'} className={s.signUpLink}>
          Sign In
        </Typography>
      </Card>
    </>
  )
}
