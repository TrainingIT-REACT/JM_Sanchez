import React from "react";

const CancionData = ({ cancion, nombreAlbum, datosExtendidos }) => {
  const getTiempo = segundos => {
    var minutes = Math.floor(segundos / 60);
    var seconds = segundos % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var total = minutes + ":" + seconds;

    return total;
  };

  const getDatos = (cancion, nombreAlbum, datosExtendidos) => {
    if (datosExtendidos) {
      return (
        <div>
          <p>Album: {nombreAlbum}</p>
          <p>{cancion.name}</p>
          <p>{getTiempo(cancion.seconds)} minutos</p>
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
