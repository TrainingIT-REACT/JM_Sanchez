import React, { Component } from "react";
import AlbumData from "../albums/AlbumData";

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingAlbums: true,
      albums: []
    };
  }

  async componentDidMount() {
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
    return "Se estan cargando los albums disponibles.";
  };

  render() {
    return this.state.loadingAlbums
      ? this.rederProgress()
      : this.state.albums.map(album => (
          <AlbumData
            key={album.id}
            nombre={album.name}
            artista={album.artist}
            imagen={album.cover}
            datosExtendidos={true}
          />
        ));
  }
}

export default AlbumList;
