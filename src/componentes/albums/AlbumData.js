import React from "react";
import { connect } from "react-redux";
import { addHistorico } from "../../actions/Historico";
import { getAlbumsVisitados } from "../../reducers/Historico";
import { NavLink } from "react-router-dom";

const AlbumData = ({ album, addHistorico}) => {
  const srcHref = `album/${album.id}`;
  return (
    <div>
      <NavLink exact to={srcHref} onClick={() => addHistorico(album.name)}>{album.name}</NavLink>
    </div>
  );
};

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

export default storeConnect(AlbumData);
