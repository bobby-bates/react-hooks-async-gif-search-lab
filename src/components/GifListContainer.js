import { useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default function GifListContainer() {
  const [threeGifs, setThreeGifs] = useState([])
  const [searchStr, setSearchStr] = useState('')

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

  const storeGifs = (gifs) => {
    const filteredGifs = gifs.data.slice(0, 3).map(gif => gif.images.original.url)
    setThreeGifs([...filteredGifs])
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchStr}&api_key=${API_KEY}&rating=g`)
      .then(r => r.json())
      .then(gifs => {
        storeGifs(gifs)
        setSearchStr('')
      })
  }

  return (
    <>
      <GifSearch
        searchStr={searchStr}
        setSearchStr={setSearchStr}
        handleSubmit={handleSubmit}
      />
      <GifList threeGifs={threeGifs} />
    </>
  )
}