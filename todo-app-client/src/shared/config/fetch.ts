const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
}

export interface ErrorResponse {
  error: string
  message: string | Array<string>
  statusCode: number
}

function isErrorResponse(response: any): response is ErrorResponse {
  console.warn(response.message)
  console.warn(typeof response === 'object'
    && !!response && Object.keys(response))
  return typeof response === 'object'
    && !!response
    && 'error' in response
    && typeof response.error === 'string'
    && 'statusCode' in response
    && typeof response.statusCode === 'number'
}

function getErrorMessage(response: ErrorResponse): string {
  return Array.isArray(response.message) ? response.message.join('\n') : response.message
}

export {
  DEFAULT_HEADERS,
  getErrorMessage,
  isErrorResponse,
}
