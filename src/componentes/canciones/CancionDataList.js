import React, { Component } from "react";
import CancionData from "./CancionData";

const getNombreAlbum = (id_Album, albums) => {
  let name = "";
  albums.forEach(element => {
    if (element.id === id_Album) {
      name = element.name;
    }
  });
  return name;
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
    try {
      const res = await fetch("/songs");
      const json = await res.json();
      this.setState(prevState => ({
        ...prevState,
        loadingSongs: false,
        canciones: json
      }));
    } catch (err) {
      console.error("Error accediendo al servidor", err);
    }

    try {
      const res = await fetch("/albums");
      const json = await res.json();
      this.setState(prevState => ({
        ...prevState,
        loadingAlbums: false,
        albums: json
      }));
    } catch (err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  rederProgress = () => {
    return "Se esta cargando la musica recomendada.";
  }

  render() {
    return this.state.loadingSongs && this.state.loadingAlbums ? (
      this.rederProgress()
    ) : (
      this.state.canciones.map(cancion => (
        <CancionData
          key={cancion.id}
          cancion={cancion}
          nombreAlbum={getNombreAlbum(cancion.album_id, this.state.albums)}
          datosExtendidos={false}
        />
      ))
    );
  }
}

export default CancionDataList;
