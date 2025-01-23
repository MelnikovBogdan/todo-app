import cn from 'classnames'
import { useActionState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn, useAuthStore } from 'shared/auth'
import { Button, EmptyLayout, Input } from 'shared/ui'
import * as styles from './RegisterPage.module.css'

type FormFields = 'email' | 'password' | 'confirmPassword'

interface FormError {
  message: string
  fields?: 'all' | FormFields[]
}

interface FormState {
  success: undefined | boolean
  error: FormError | undefined
}

export default function RegisterPage() {
  const navigate = useNavigate()
  const { setToken } = useAuthStore()

  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    async (
      prevState: FormState,
      formData: FormData,
    ): Promise<FormState> => {
      const email = formData.get('email') as string
      const password = formData.get('password') as string
      const confirmPassword = formData.get('confirmPassword') as string

      if (password !== confirmPassword) {
        return {
          success: false,
          error: {
            message: 'Passwords do not match',
            fields: ['password', 'confirmPassword'],
          },
        }
      }

      try {
        const { token } = await signIn({ email, password })
        setToken(token)
        navigate('/')

        return { success: true, error: undefined }
      }
      catch (e) {
        if (e instanceof Error)
          return { success: false, error: { fields: 'all', message: e.message } }
        return { success: false, error: { fields: 'all', message: 'Unknown error' } }
      }
    },
    { success: undefined, error: undefined },
  )

  function goToSignInPage() {
    navigate('/login')
  }

  return (
    <EmptyLayout>
      <div className={styles.registerPage}>
        <div className={styles.registerPage__formContainer}>
          <h1 className={styles.registerPage__title}>
            Sign Up
          </h1>
          <p className={styles.registerPage__description}>
            Already have an account?
            {' '}
            <Button
              className={styles.registerPage__linkButton}
              type="link"
              onClick={goToSignInPage}
            >
              Sign In
            </Button>
            .
          </p>

          <form
            action={formAction}
            className={styles.registerPage__form}
          >
            <Input
              className={cn([
                styles.registerPage__form__input,
                styles.registerPage__form__input_emailInput,
              ])}
              label="Email"
              name="email"
              placeholder="example@example.com"
              type="email"
              required
            />
            <Input
              label="Password"
              className={cn([
                styles.registerPage__form__input,
                styles.registerPage__form__input_passwordInput,
              ])}
              name="password"
              placeholder="Password"
              type="password"
              minLength={5}
              required
            />
            <Input
              label="Confirm password"
              className={cn([
                styles.registerPage__form__input,
                styles.registerPage__form__input_passwordInput,
              ])}
              name="confirmPassword"
              placeholder="Password"
              type="password"
              minLength={5}
              required
            />
            {state.success !== undefined && <span className={styles.registerPage__form__error}>{state.message}</span>}
            <Button
              type="primary"
              htmlType="submit"
              className={styles.registerPage__form__assignButton}
              disabled={isPending}
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </EmptyLayout>
  )
}
