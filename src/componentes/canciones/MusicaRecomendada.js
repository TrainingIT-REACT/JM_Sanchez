import React, { Component } from "react";
import List from "@material-ui/core/List";

const CancionDataList = React.lazy(() => import("./CancionDataList"));

class MusicaRecomendada extends Component {
  render() {
    return (
      <div>
        <h3>Musica recomendada</h3>
        <List component="nav">
          <React.Suspense fallback="Se esta cargando la musica recomendada.">
            <CancionDataList />
          </React.Suspense>
        </List>
      </div>
    );
  }
}

export default MusicaRecomendada;
