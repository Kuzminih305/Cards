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
export const SignUp = () => {
  const { control, handleSubmit } = useForm<SignUpFormShem>({
    resolver: zodResolver(sigUpSchema),
  })

  const onSubmit = (data: SignUpFormShem) => {
    console.log(data)
  }

  return (
    <Card className={s.signBlock}>
      <Typography className={s.title} variant={'large'}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <ControlledTextField
          name={'email'}
          label={'Email'}
          type={'email'}
          placeholder={'enter your email'}
          control={control}
          className={s.email}
        />
        <ControlledTextField
          name={'password'}
          label={'Password'}
          type={'password'}
          placeholder={'enter your password'}
          control={control}
          className={s.password}
        />
        <ControlledTextField
          name={'confirmPassword'}
          label={'Confirm password'}
          type={'password'}
          placeholder={'enter your password'}
          control={control}
          className={s.confirmPassword}
        />
        <Button fullWidth={true} className={s.submit} type="submit">
          Sign Up
        </Button>
      </form>
      <Typography variant={'body2'} className={s.question}>
        Already have an account?
      </Typography>
      <Button as={'a'} variant={'link'} className={s.signIn}>
        Sign In
      </Button>
    </Card>
  )
}
