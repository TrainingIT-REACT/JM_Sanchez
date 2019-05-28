import React, { Component } from "react";
import { connect } from "react-redux";
import AlbumData from "../albums/AlbumData";
import { obtenerAlbums } from "../Utils";
import { addHistorico } from "./../../actions/Historico";
import { getAlbumsVisitados } from "../../reducers/Historico";

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
            <AlbumData
              key={album.id}
              album={album}
              onClick={addHistorico}
            />
          </li>
        ));
  }
}

const mapStateToProps = state => ({
  albumsVisitados: getAlbumsVisitados(state)
});

const mapDispatchToProps = dispatch => ({
  addHistorico: texto => dispatch(addHistorico(texto))
});

const storeConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default storeConnect(AlbumList);
