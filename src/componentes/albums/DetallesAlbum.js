import React, { Component } from "react";
import { connect } from "react-redux";
import AlbumDataExtended from "./AlbumDataExtended";
import { getMinutos } from "./../Utils";
import { getAlbumsYCanciones } from "../../reducers/AlbumsYCanciones";

const idAlbum = (id_album, albums, songs) => {
  const albumBuscado = albums.find(a => id_album === a.id.toString());
  var duracion = null;
  var cancionesDelAlbum = null;

  if (albumBuscado) {
    cancionesDelAlbum = songs.filter(a => id_album === a.album_id.toString());

    if (cancionesDelAlbum) {
      duracion = getMinutos(getDuracion(cancionesDelAlbum));
    }
  }

  const album = {
    id: albumBuscado ? id_album : -1,
    name: albumBuscado ? albumBuscado.name : "No encontrado",
    artist: albumBuscado ? albumBuscado.artist : "",
    cover: albumBuscado ? albumBuscado.cover : "",
    duracion: duracion ? `${duracion} minutos` : "",
    cancionesDelAlbum: cancionesDelAlbum ? cancionesDelAlbum : null
  };

  return album;
};

const getDuracion = cancionesDelAlbum => {
  var total = 0;
  cancionesDelAlbum.forEach(element => {
    total = total + element.seconds;
  });
  return total;
};

class DetallesAlbum extends Component {
  render() {
    if (this.props.albumsYCanciones.loading === false) {
      return (
        <div>
          <ul>
            <AlbumDataExtended
              album={idAlbum(
                this.props.match.params.id_album,
                this.props.albumsYCanciones.albums,
                this.props.albumsYCanciones.songs
              )}
            />
          </ul>
        </div>
      );
    } else if (this.props.albumsYCanciones.error === true) {
      return <div>Ha habido un error al cargar los detalles del album</div>;
    } else {
      return <div>Cargando los albums detalles del album</div>;
    }
  }
}

const mapStateToProps = state => ({
  ...state,
  albumsYCanciones: getAlbumsYCanciones(state)
});

const storeConnect = connect(mapStateToProps);

export default storeConnect(DetallesAlbum);
