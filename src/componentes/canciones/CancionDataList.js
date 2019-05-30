import React, { Component } from "react";
import { connect } from "react-redux";
import CancionData from "./CancionData";
import { getAlbumsYCanciones } from "../../reducers/AlbumsYCanciones";

const getNombreAlbum = (id_Album, albums) => {
  const name = albums.find(a => a.id === id_Album);
  return name ? name.name : "";
};

class CancionDataList extends Component {
  render() {
    if (this.props.albumsYCanciones.loading === false) {
      return this.props.albumsYCanciones.songs.map(cancion => (
        <CancionData
          key={cancion.id}
          cancion={cancion}
          nombreAlbum={getNombreAlbum(cancion.album_id, this.props.albumsYCanciones.albums)}
        />
      ));
    } else if (this.props.albumsYCanciones.error === true) {
      return <div>Ha habido un error al cargar la lista de canciones</div>;
    } else {
      return <div>Cargando la lista de canciones</div>;
    }
  }
}

const mapStateToProps = state => ({
  ...state,
  albumsYCanciones: getAlbumsYCanciones(state)
});

const storeConnect = connect(mapStateToProps);

export default storeConnect(CancionDataList);
