export async function getForecast(city) {
  const key = import.meta.env.VITE_OWM_API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${key}`
  );
  if (!res.ok) throw new Error("Forecast failed");
  return res.json();
}
