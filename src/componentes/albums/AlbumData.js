import React from "react";

const AlbumData = ({ nombre, artista, imagen, datosExtendidos }) => {
  const getDatos = (nombre, artista, imagen, datosExtendidos) => {
    if (datosExtendidos) {
      const urlImagen = `../../..${imagen}`;
      return (
        <div>
          <p>{nombre}</p>
          <p>{artista}</p>
          <img src={urlImagen} alt={nombre} height="70" width="70" />
        </div>
      );
    } else {
      return (
        <div>
          <p>{nombre}</p>
        </div>
      );
    }
  };

  return (
      <li>{getDatos(nombre, artista, imagen, datosExtendidos)}</li>
  );
};

export default AlbumData;
