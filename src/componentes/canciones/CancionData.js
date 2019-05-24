import React from "react";
import { getMinutos } from "./../Utils";

const CancionData = ({ cancion, nombreAlbum, datosExtendidos }) => {
  const getDatos = (cancion, nombreAlbum, datosExtendidos) => {
    if (datosExtendidos) {
      return (
        <div>
          <p>Album: {nombreAlbum}</p>
          <p>{cancion.name}</p>
          <p>{getMinutos(cancion.seconds)} minutos</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>{cancion.name}</p>
        </div>
      );
    }
  };

  return <li>{getDatos(cancion, nombreAlbum, datosExtendidos)}</li>;
};

export default CancionData;
