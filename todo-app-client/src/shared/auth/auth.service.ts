import { BACKEND_BASE_URL } from 'shared/config/backend'
import { DEFAULT_HEADERS, getErrorMessage, isErrorResponse } from 'shared/config/fetch'

interface SignInDto {
  email: string
  password: string
}

interface UserTokenDto {
  token: string
}

export async function signIn(signInDto: SignInDto): Promise<UserTokenDto> {
  const response = await fetch(`${BACKEND_BASE_URL}/auth/signin`, {
    method: 'POST',
    headers: { ...DEFAULT_HEADERS },
    body: JSON.stringify(signInDto),
  })

  const responseJSON: UserTokenDto = await response.json()

  if (!response.ok) {
    if (isErrorResponse(responseJSON)) {
      throw new Error(getErrorMessage(responseJSON))
    }

    throw new Error('Something is broken!')
  }

  return responseJSON
}

interface RegisterDto {
  email: string
  password: string
}

export async function register(registerDto: RegisterDto): Promise<UserTokenDto> {
  const response = await fetch(`${BACKEND_BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: { ...DEFAULT_HEADERS },
    body: JSON.stringify(registerDto),
  })

  const responseJSON: UserTokenDto = await response.json()

  if (!response.ok) {
    if (isErrorResponse(responseJSON)) {
      throw new Error(getErrorMessage(responseJSON))
    }

    throw new Error('Something is broken!')
  }

  return responseJSON
}
