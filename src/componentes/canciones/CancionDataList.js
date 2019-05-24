import React, { Component } from "react";
import CancionData from "./CancionData";
import { obtenerAlbums, obtenerCanciones } from "../Utils";

const getNombreAlbum = (id_Album, albums) => {
  const name = albums.find(a => a.id === id_Album);
  return name ? name.name : "";
};

class CancionDataList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingSongs: true,
      loadingAlbums: true,
      songs: [],
      albums: []
    };
  }

  async componentDidMount() {
    obtenerCanciones(this);
    obtenerAlbums(this);
  }

  rederProgress = () => {
    return "Se esta cargando la musica recomendada.";
  };

  render() {
    return this.state.loadingSongs && this.state.loadingAlbums
      ? this.rederProgress()
      : this.state.songs.map(cancion => (
          <CancionData
            key={cancion.id}
            cancion={cancion}
            nombreAlbum={getNombreAlbum(cancion.album_id, this.state.albums)}
            datosExtendidos={false}
          />
        ));
  }
}

export default CancionDataList;
