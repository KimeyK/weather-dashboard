export default function ForecastCard({ day }) {
  const d = new Date(day.date);
  const label = d.toLocaleDateString(undefined, { weekday: "short" });
  return (
    <div className="bg-white rounded shadow p-3 text-center">
      <p className="font-semibold">{label}</p>
      <img
        alt={day.desc}
        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
        className="mx-auto"
      />
      <p className="text-sm text-gray-600">{Math.round(day.min)}°C / {Math.round(day.max)}°C</p>
      <p className="text-xs text-gray-500">{day.desc}</p>
    </div>
  );
}
