import React, { Component } from "react";

const AlbumList = React.lazy(() => import("../albums/AlbumList"));

class Albums extends Component {
  render() {
    return (
      <div>
        <h3>Albums disponibles</h3>
        <ul>
          <React.Suspense fallback="Se estan cargando los albums disponibles.">
            <AlbumList />
          </React.Suspense>
        </ul>
      </div>
    );
  }
}

export default Albums;
