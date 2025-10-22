export default function CurrentWeather({ data }) {
  if (!data) return null
  const { name, main, wind, weather } = data
  const icon = weather?.[0]?.icon
  const desc = weather?.[0]?.description
  return (
    <section className="mt-6 p-4 bg-white rounded shadow w-full max-w-xl mx-auto">
      <div className="flex items-center gap-4">
        {icon && <img alt={desc} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />}
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-700">
            {Math.round(main.temp)}°C · Feels {Math.round(main.feels_like)}°C · Hum {main.humidity}% · Wind {Math.round(wind.speed)} m/s
          </p>
        </div>
      </div>
    </section>
  )
}
