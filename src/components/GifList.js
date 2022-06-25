

export default function GifList({ threeGifs }) {
  const renderGifs = threeGifs.map(url => (
    <li key={url} style={{'listStyleType': 'none'}}><img src={url} /></li>
    ))

  return (
    <>
      <ul>
        {renderGifs}
      </ul>
    </>
  )
}