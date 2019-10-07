const formatMinutes = miliseconds =>{
  const allSeconds = miliseconds / 1000
  const minutes = (allSeconds / 60).toFixed(0)
  const seconds = (allSeconds % 60).toFixed(0)

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}
export default formatMinutes;
