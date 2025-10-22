const BASE = 'https://api.openweathermap.org/data/2.5'
const UNITS = 'metric'

export async function getCurrentWeather(city) {
  const key = import.meta.env.VITE_OWM_API_KEY
  const res = await fetch(`${BASE}/weather?q=${encodeURIComponent(city)}&units=${UNITS}&appid=${key}`)
  if (!res.ok) throw new Error('City not found')
  return res.json()
}

export async function getForecast(city) {
  const key = import.meta.env.VITE_OWM_API_KEY
  const res = await fetch(`${BASE}/forecast?q=${encodeURIComponent(city)}&units=${UNITS}&appid=${key}`)
  if (!res.ok) throw new Error('Forecast failed')
  return res.json()
}
