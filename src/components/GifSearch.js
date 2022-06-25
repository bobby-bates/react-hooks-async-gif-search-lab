import { useState } from 'react'

export default function GifSearch({ handleSubmit }) {
  const [searchStr, setSearchStr] = useState('')
  console.log(searchStr)
  const handleChange = e => setSearchStr(e.target.value)

  return (
    <>
      <form >
        <label>Enter a search term:
          <input type='text' onChange={handleChange}/>
        </label>
        <input type='submit' value='Find GIFs' onSubmit={handleSubmit}/>
      </form>
      <h1>Hi from GifSearch</h1>
    </>
  )
}