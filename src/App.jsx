import { useState } from 'react'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import { getCurrentWeather } from './services/weatherService'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [current, setCurrent] = useState(null)

  async function handleSearch(city) {
    try {
      setError(''); setLoading(true)
      const data = await getCurrentWeather(city)
      setCurrent(data)
    } catch (e) {
      setError(e.message || 'Something went wrong')
      setCurrent(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-center mt-4">Loading…</p>}
      {error && <p className="text-center text-red-600 mt-4">{error}</p>}
      <CurrentWeather data={current} />
    </main>
  )
}
