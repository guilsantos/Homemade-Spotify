import token from './token'

describe('token', () => {
  it('Set and get a token', () => {
    let validToken = token.get()
    expect(validToken).toEqual(null)

    token.set('valid token')

    validToken = token.get()
    expect(validToken).toEqual('valid token')
  })
})
