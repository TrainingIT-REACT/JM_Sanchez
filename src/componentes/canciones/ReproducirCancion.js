import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { connect } from "react-redux";
import { getAlbumsYCanciones } from "../../reducers/AlbumsYCanciones";

const getSrcCancion = props => {
  const cancion = props.albumsYCanciones.songs.filter(
    a => props.match.params.id_cancion === a.id.toString()
  );

  const datos = {
    nombre: cancion[0].name,
    ubicacion: `../../../static/${cancion[0].audio}`
  };

  return datos;
};

class ReproducirCancion extends Component {
  rederFinish = () => {
    const datos = getSrcCancion(this.props);
    return (
      <div>
        <h3>{datos.nombre}</h3>
        <ReactAudioPlayer src={datos.ubicacion} autoPlay controls />
      </div>
    );
  };

  render() {
    if (this.props.albumsYCanciones.loading === false) {
      return this.rederFinish();
    } else if (this.props.albumsYCanciones.error === true) {
      return <div>Ha habido un error al reproducir la cancion</div>;
    } else {
      return <div>Cargando al reproducir la cancion</div>;
    }
  }
}

const mapStateToProps = state => ({
  ...state,
  albumsYCanciones: getAlbumsYCanciones(state)
});

export default connect(mapStateToProps)(ReproducirCancion);
