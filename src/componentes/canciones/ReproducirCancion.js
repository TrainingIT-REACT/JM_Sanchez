import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { obtenerCanciones } from "../Utils";

class ReproducirCancion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_cancion: props.match.params.id_cancion,
      loadingSongs: true,
      songs: []
    };
  }

  async componentDidMount() {
    obtenerCanciones(this);
  }

  rederProgress = () => {
    return "Se esta cargando el reproductor.";
  };

  rederFinish = () => {
    const datos = getSrcCancion(this.state);
    return (
      <div>
        <h3>{datos.nombre}</h3>
        <ReactAudioPlayer src={datos.ubicacion} autoPlay controls />
      </div>
    );
  };

  render() {
    return this.state.loadingSongs ? this.rederProgress() : this.rederFinish();
  }
}

const getSrcCancion = state => {
  const cancion = state.songs.filter(a => state.id_cancion === a.id.toString());

  const datos = {
    nombre: cancion[0].name,
    ubicacion: `../../../static/${cancion[0].audio}`
  };

  return datos;
};

export default ReproducirCancion;
