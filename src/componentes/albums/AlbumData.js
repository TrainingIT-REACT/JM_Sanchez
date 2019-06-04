import React from "react";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import { addHistoricoAlbums } from "../../actions/Historico";
import { getAlbumsVisitados } from "../../reducers/Historico";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const AlbumData = ({ album, addHistoricoAlbums }) => {
  const srcHref = `album/${album.id}`;
  return (
    <NavLink exact to={srcHref} onClick={() => addHistoricoAlbums(album.name)}>
      <ListItemLink href={srcHref}>
        <ListItemText primary={album.name} />
      </ListItemLink>
    </NavLink>
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
