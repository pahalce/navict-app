import type { UserInfo, UserUpdateBody, UserWithoutPersonal } from '$/types'

export type Methods = {
  /**
   * get a user
   * GET /users/_userId@number
   */
  get: {
    resBody: UserInfo
  }

  /**
   * update a user
   * ** PUT /users/_userId@number
   */
  put: {
    reqBody: UserUpdateBody
    resBody: UserWithoutPersonal
  }

  /**
   * delete a user
   * ** DELETE /users/_userId@number
   */
  delete: {
    status: 204
  }
}
