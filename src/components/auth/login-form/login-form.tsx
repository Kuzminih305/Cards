import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, CheckboxDemo, TextField } from '../../ui'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

export const LoginForm = () => {
  const { register, handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })
  const {
    field: { value, onChange },
    formState: { errors },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} errorMessage={errors.email?.message} />
      <TextField
        {...register('password')}
        label={'password'}
        errorMessage={errors.password?.message}
        type={'password'}
      />
      <CheckboxDemo
        variant={'default'}
        onValueChange={onChange}
        checked={value}
        label={'rememberMe'}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
