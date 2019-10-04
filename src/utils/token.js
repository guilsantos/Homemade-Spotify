const get = () => localStorage.getItem('access_token')
const set = token => localStorage.setItem('access_token', token)

export default { get, set }
