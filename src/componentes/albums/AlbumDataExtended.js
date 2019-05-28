import React from "react";
import { connect } from "react-redux";
import CancionData from "../canciones/CancionData";
import { addHistorico } from "../../actions/Historico";
import { getAlbumsVisitados } from "../../reducers/Historico";

const AlbumDataExtended = ({ album, albumsVisitados }) => {
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
};

const mapStateToProps = state => ({
  albumsVisitados: getAlbumsVisitados(state)
});

const mapDispatchToProps = dispatch => ({
  ello: texto => dispatch(addHistorico(texto))
});

const storeConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default storeConnect(AlbumDataExtended);
