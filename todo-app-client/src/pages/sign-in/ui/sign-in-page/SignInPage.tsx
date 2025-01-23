import cn from 'classnames'
import { useActionState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn, useAuthStore } from 'shared/auth'
import { Button, EmptyLayout, Input } from 'shared/ui'
import * as styles from './SignInPage.module.css'

interface FormState {
  success: undefined | boolean
  message: string
}

export default function SignInPage() {
  const navigate = useNavigate()
  const { setToken } = useAuthStore()

  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    async (
      prevState: FormState,
      formData: FormData,
    ): Promise<FormState> => {
      const email = formData.get('email') as string
      const password = formData.get('password') as string

      try {
        const { token } = await signIn({ email, password })
        setToken(token)
        navigate('/')

        return { success: true, message: '' }
      }
      catch (e) {
        if (e instanceof Error)
          return { success: false, message: e.message }
        return { success: false, message: 'Something is broken!' }
      }
    },
    { success: undefined, message: '' },
  )

  function goToRegisterPage() {
    navigate('/register')
  }

  return (
    <EmptyLayout>
      <div className={styles.signInPage}>
        <div className={styles.signInPage__formContainer}>
          <h1 className={styles.signInPage__title}>
            Sign In
          </h1>
          <p className={styles.signInPage__description}>
            Welcome back! If you don't have an account, you can
            {' '}
            <Button
              className={styles.signInPage__linkButton}
              type="link"
              onClick={goToRegisterPage}
            >
              register here
            </Button>
            .
          </p>

          <form
            action={formAction}
            className={styles.signInPage__form}
          >
            <Input
              className={cn([
                styles.signInPage__form__input,
                styles.signInPage__form__input_emailInput,
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
                styles.signInPage__form__input,
                styles.signInPage__form__input_passwordInput,
              ])}
              name="password"
              placeholder="Password"
              type="password"
              minLength={5}
              required
            />
            {state.success !== undefined && <span className={styles.signInPage__form__error}>{state.message}</span>}
            <Button
              type="primary"
              htmlType="submit"
              className={styles.signInPage__form__assignButton}
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
