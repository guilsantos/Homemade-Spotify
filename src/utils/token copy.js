import { propPath } from 'crocks'

const PREFERENCES_KEY = 'preferences'

export const getPreferences = () =>
  JSON.parse(localStorage.getItem(PREFERENCES_KEY)) || {}

export const getPreference = preference =>
  propPath([preference], getPreferences()).option(null)

export const setPreference = (preference, value) => {
  const newPreference = { [preference]: value }
  const newPreferences = { ...getPreferences(), ...newPreference }

  localStorage.setItem(PREFERENCES_KEY, JSON.stringify(newPreferences))
}

export const getToken = () => getPreference('access_token')
export const setToken = token => setPreference('access_token', token)

export const getTableColumns = table =>
  getPreference(`tableColumns_${table}`) || []
export const setTableColumns = (table, columns) =>
  setPreference(`tableColumns_${table}`, columns)
