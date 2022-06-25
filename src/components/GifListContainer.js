import { useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default function GifListContainer() {
  const [threeGifs, setThreeGifs] = useState([])

  // fetching the data from the Giphy API


  // storing the first 3 gifs from the response in its component state

  const handleSubmit = e => {
    debugger
    e.preventDefault()
    console.log('Hi from handleSubmit')
  }

  return (
    <>
      <GifSearch onSubmit={handleSubmit} />
      <GifList threeGifs={threeGifs} />
    </>
  )
}