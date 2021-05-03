type SigninBody = {
  accessToken: string
}

type Token = { token: string }

export type Methods = {
  // signin
  post: {
    reqBody: SigninBody
    resBody: Token
  }
}
