import React, { Component } from "react";
import { connect } from "react-redux";
import AlbumData from "../albums/AlbumData";
import { getAlbumsYCanciones } from "../../reducers/AlbumsYCanciones";
import { addHistoricoAlbums } from "./../../actions/Historico";

class AlbumList extends Component {
  render() {
    if (this.props.albumsYCanciones.loading === false) {
      return this.props.albumsYCanciones.albums.map(album => (
          <AlbumData
            key={album.id}
            album={album}
            onClick={addHistoricoAlbums}
          />
      ));
    } else if (this.props.albumsYCanciones.error === true) {
      return <div>Ha habido un error al cargar los albums</div>;
    } else {
      return <div>Cargando los albums</div>;
    }
  }
}

const mapStateToProps = state => ({
  ...state,
  albumsYCanciones: getAlbumsYCanciones(state)
});

const storeConnect = connect(mapStateToProps);

export default storeConnect(AlbumList);
