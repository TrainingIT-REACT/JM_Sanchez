import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getCancionesVisitadas } from "../../reducers/Historico";
import { addHistoricoCanciones } from "../../actions/Historico";

const CancionData = ({ cancion, addHistoricoCanciones, albumDataExtended }) => {
  var srcHref = "";
  if(albumDataExtended){
    srcHref = `../reproducirCancion/${cancion.id}`;
  } else{
    srcHref = `/reproducirCancion/${cancion.id}`;
  }
  return (
    <li>
      <NavLink
        exact
        to={srcHref}
        onClick={() => addHistoricoCanciones(cancion.name)}
      >
        {cancion.name}
      </NavLink>
    </li>
  );
};

const mapStateToProps = state => ({
  cancionesVisitadas: getCancionesVisitadas(state)
});

const mapDispatchToProps = dispatch => ({
  addHistoricoCanciones: texto => dispatch(addHistoricoCanciones(texto))
});

const storeConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default storeConnect(CancionData);
