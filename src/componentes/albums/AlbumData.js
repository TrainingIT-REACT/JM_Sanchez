import React from "react";
import CancionData from "./../canciones/CancionData";

const AlbumData = ({ album, datosExtendidos }) => {
  const getDatos = (album, datosExtendidos) => {
    if (datosExtendidos) {
      const urlImagen = `../../..${album.cover}`;
      return (
        <div>
          <p>{album.name}</p>
          <p>{album.artist}</p>
          <p>
            <img src={urlImagen} alt={album.name} height="300" width="300" />
          </p>
          <p>Duracion total: {album.duracion}</p>
          <h4>Canciones del album</h4>
          {album.cancionesDelAlbum.map(cancion => (
            <CancionData
              key={cancion.id}
              cancion={cancion}
              nombreAlbum={cancion.name}
              datosExtendidos={false}
            />
          ))}
        </div>
      );
    } else {
      const srcHref = `album/${album.id}`;
      return (
        <div>
          <p>
            <a href={srcHref}>{album.name}</a>
          </p>
        </div>
      );
    }
  };

  return getDatos(album, datosExtendidos);
};

export default AlbumData;
