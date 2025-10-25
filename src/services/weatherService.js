// src/services/weatherService.js
const API_BASE = 'https://api.openweathermap.org/data/2.5';
const API_KEY = import.meta.env.VITE_OWM_API_KEY;

// Current weather by city name
export async function getCurrentWeather(city) {
  if (!API_KEY) throw new Error('Missing VITE_OWM_API_KEY');
  const url = `${API_BASE}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch current weather');
  return res.json();
}

// 5-day / 3-hour forecast by city name
export async function getForecast(city) {
  if (!API_KEY) throw new Error('Missing VITE_OWM_API_KEY');
  const url = `${API_BASE}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch forecast');
  return res.json();
}
