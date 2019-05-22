import React, { Component } from "react";

const CancionDataList = React.lazy(() => import("./CancionDataList"));

class MusicaRecomendada extends Component {
  render() {
    return (
      <div>
        <h3>Musica recomendada</h3>
        <ul>
          <React.Suspense fallback="Se esta cargando la musica recomendada.">
            <CancionDataList />
          </React.Suspense>
        </ul>
      </div>
    );
  }
}

export default MusicaRecomendada;
