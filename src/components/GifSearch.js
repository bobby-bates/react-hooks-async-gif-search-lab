import { useState } from 'react'

export default function GifSearch({ searchStr, setSearchStr, handleSubmit }) {
  const handleChange = e => setSearchStr(e.target.value)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter a search term:
          <input type='text' value={searchStr} onChange={handleChange}/>
        </label>
        <button type='submit'>Find GIFs</button>
      </form>
    </>
  )
}