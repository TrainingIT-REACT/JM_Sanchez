import React, { Component } from "react";
import List from "@material-ui/core/List";

const AlbumList = React.lazy(() => import("../albums/AlbumList"));

class Albums extends Component {
  render() {
    return (
      <div>
        <h3>Albums disponibles</h3>
        <React.Suspense fallback="Se estan cargando los albums disponibles.">
          <List component="nav">
            <AlbumList />
          </List>
        </React.Suspense>
      </div>
    );
  }
}

export default Albums;
