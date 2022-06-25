

export default function GifList({ threeGifs }) {
  console.log(threeGifs)
  // debugger

  const renderGifs = () => threeGifs.map(gif => {
    return <li>{gif}</li>
  })

  return (
    <>
      <h1>Hi from GifList</h1>
      <ul>

      </ul>
    </>
  )
}