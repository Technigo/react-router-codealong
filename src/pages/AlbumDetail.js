import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const AlbumDetail = () => {
  const { albumId } = useParams()
  const [album, setAlbum] = useState([])

  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${albumId}`)
      .then((res) => res.json())
      .then((json) => {
        setAlbum(json.album[0])
      })
  }, [albumId])

  return (
    <div>
      {album && (
        <div key={album.idAlbum}>
          <img src={`${album.strAlbumThumb}/preview`} alt={album.strAlbum} />
          <h1>{album.strAlbum}</h1>
          <h3>{album.intYearReleased}</h3>
          <h3>Genre: {album.strGenre}</h3>
        </div>
      )}
    </div>
  )
}
