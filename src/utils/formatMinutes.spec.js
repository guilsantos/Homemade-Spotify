import formatMinutes from './formatMinutes'

describe('formatMinutes', () => {
  it('should format minutes from ms', () => {
    const formatedValue = formatMinutes(109293)
    expect(formatedValue).toEqual('2:49')
  })
})
