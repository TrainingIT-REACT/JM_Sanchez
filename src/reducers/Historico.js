import types from "./../actions/Types";

const initialState = {
  historico: {
  albumsVisitados: [],
  cancionesVisitadas: []
  },
};

const reducer = (state = initialState.historico, action) => {
  switch (action.type) {
    case types.ADD_HISTORICO_ALBUMS: {
      return {
        ...state,
        albumsVisitados: [
          ...state.albumsVisitados,
          action.text,
        ]
      };
    }
    case types.ADD_HISTORICO_CANCIONES: {
      return {
        ...state,
        cancionesVisitadas: [
          ...state.cancionesVisitadas,
          action.text,
        ]
      };
    }
    default:
      return state;
  }
};

export const getAlbumsVisitados = state => state.historico.albumsVisitados;
export const getCancionesVisitadas = state => state.historico.cancionesVisitadas;

export default reducer;
