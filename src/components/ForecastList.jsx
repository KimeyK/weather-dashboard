import ForecastCard from "./ForecastCard";

export default function ForecastList({ data }) {
  if (!data || !data.list) return null;

  // Group 3-hour intervals by date
  const days = {};
  data.list.forEach(item => {
    const date = item.dt_txt.split(" ")[0];
    if (!days[date]) days[date] = [];
    days[date].push(item);
  });

  const daily = Object.entries(days).map(([date, entries]) => {
    const temps = entries.map(e => e.main.temp);
    const min = Math.min(...temps);
    const max = Math.max(...temps);
    const icon = entries[0].weather[0].icon;
    const desc = entries[0].weather[0].description;
    return { date, min, max, icon, desc };
  });

  return (
    <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {daily.slice(0, 5).map(day => (
        <ForecastCard key={day.date} day={day} />
      ))}
    </section>
  );
}
