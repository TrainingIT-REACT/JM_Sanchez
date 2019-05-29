import React, { Component } from "react";
import AlbumDataExtended from "./AlbumDataExtended";
import { obtenerAlbums, obtenerCanciones } from "../Utils";
import { getMinutos } from "./../Utils";

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
  constructor(props) {
    super(props);
    this.state = {
      id_album: props.match.params.id_album,
      loadingSongs: true,
      loadingAlbums: true,
      songs: [],
      albums: []
    };
  }

  async componentDidMount() {
    obtenerAlbums(this);
    obtenerCanciones(this);
  }

  rederProgress = () => {
    return "Se estan cargando los detalles del album.";
  };

  render() {
    return this.state.loadingSongs || this.state.loadingAlbums ? (
      this.rederProgress()
    ) : (
      <div>
        <h3>Detalles del album</h3>
        <ul>
          <AlbumDataExtended
            album={idAlbum(
              this.state.id_album,
              this.state.albums,
              this.state.songs
            )}
            datosExtendidos={true}
          />
        </ul>
      </div>
    );
  }
}

export default DetallesAlbum;
