import React, { Component } from "react";
import AlbumData from "../albums/AlbumData";
import { obtenerAlbums } from "../Utils";

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingAlbums: true,
      albums: []
    };
  }

  async componentDidMount() {
    obtenerAlbums(this);
  }

  rederProgress = () => {
    return "Se estan cargando los albums disponibles.";
  };

  render() {
    return this.state.loadingAlbums
      ? this.rederProgress()
      : this.state.albums.map(album => (
          <li>
            <AlbumData key={album.id} album={album} datosExtendidos={false} />
          </li>
        ));
  }
}

export default AlbumList;
