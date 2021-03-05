import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    /*
     * This URL is now different from the video, since the mostloved.php endpoint
     *   is now locked behind Patreon.
     *  See https://theaudiodb.com/api_guide.php
     */
    fetch("https://theaudiodb.com/api/v1/json/1/album.php?i=112024")
      .then((res) => res.json())
      .then((json) => {
        // json.loved -> json.album since we changed endpoints
        setAlbums(json.album);
      });
  }, []);

  return (
    <div>
      {albums.map((album) => (
        <div key={album.idAlbum}>
          <img src={`${album.strAlbumThumb}/preview`} alt={album.strAlbum} />
          <h2>{album.strAlbum}</h2>
          <h3>
            <Link to={`/albums/${album.idAlbum}`}>{album.strAlbum}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};
