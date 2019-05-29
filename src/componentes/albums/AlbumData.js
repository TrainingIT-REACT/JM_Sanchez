import React from "react";
import { connect } from "react-redux";
import { addHistoricoAlbums } from "../../actions/Historico";
import { getAlbumsVisitados } from "../../reducers/Historico";
import { NavLink } from "react-router-dom";

const AlbumData = ({ album, addHistoricoAlbums}) => {
  const srcHref = `album/${album.id}`;
  return (
    <div>
      <NavLink exact to={srcHref} onClick={() => addHistoricoAlbums(album.name)}>{album.name}</NavLink>
    </div>
  );
};

const mapStateToProps = state => ({
  albumsVisitados: getAlbumsVisitados(state)
});

const mapDispatchToProps = dispatch => ({
  addHistoricoAlbums: texto => dispatch(addHistoricoAlbums(texto))
});

const storeConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default storeConnect(AlbumData);
