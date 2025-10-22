import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import { getCurrentWeather, getForecast } from "./services/weatherService";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [recent, setRecent] = useState(
    JSON.parse(localStorage.getItem("recentCities") || "[]")
  );

  async function handleSearch(city) {
    try {
      setError("");
      setLoading(true);
      const [curr, fore] = await Promise.all([
        getCurrentWeather(city),
        getForecast(city),
      ]);
      setCurrent(curr);
      setForecast(fore);

      // update recent searches
      const updated = [city, ...recent.filter(c => c !== city)].slice(0, 5);
      setRecent(updated);
      localStorage.setItem("recentCities", JSON.stringify(updated));
    } catch (e) {
      setError(e.message || "Something went wrong");
      setCurrent(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Weather Dashboard</h1>

      <SearchBar onSearch={handleSearch} />

      {recent.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {recent.map(city => (
            <button
              key={city}
              onClick={() => handleSearch(city)}
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >
              {city}
            </button>
          ))}
        </div>
      )}

      {loading && <p className="text-center mt-4">Loading…</p>}
      {error && <p className="text-center text-red-600 mt-4">{error}</p>}

      <CurrentWeather data={current} />
      <ForecastList data={forecast} />
    </main>
  );
}
