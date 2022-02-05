const kelvinToCelsius = (kelvin) => {
  const result = kelvin - 273.15
  const rounding = Math.ceil(result)
  return `${rounding}°`
}

export default kelvinToCelsius;