import { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('')
  return (
    <form
      onSubmit={(e)=>{e.preventDefault(); if(city.trim()) onSearch(city.trim())}}
      className="flex gap-2 w-full max-w-xl mx-auto"
    >
      <input
        className="flex-1 border rounded px-3 py-2"
        placeholder="Search city e.g., Nairobi"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  )
}
