import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { getCancionesVisitadas } from "../../reducers/Historico";
import { addHistoricoCanciones } from "../../actions/Historico";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const CancionData = ({ cancion, addHistoricoCanciones, albumDataExtended }) => {
  var srcHref = "";
  if (albumDataExtended) {
    srcHref = `../reproducirCancion/${cancion.id}`;
  } else {
    srcHref = `/reproducirCancion/${cancion.id}`;
  }
  return (
    <NavLink
      exact
      to={srcHref}
      onClick={() => addHistoricoCanciones(cancion.name)}
    >
      <ListItemLink href={srcHref}>
        <ListItemText primary={cancion.name} />
      </ListItemLink>
    </NavLink>
  );
};

const mapStateToProps = state => ({
  cancionesVisitadas: getCancionesVisitadas(state)
});

const mapDispatchToProps = dispatch => ({
  addHistoricoCanciones: texto => dispatch(addHistoricoCanciones(texto))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CancionData);
