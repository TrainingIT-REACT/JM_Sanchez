import types from "./../actions/Types";

const initialState = {
  historico: {
  albumsVisitados: [],
  },
};

const reducer = (state = initialState.historico, action) => {
  switch (action.type) {
    case types.ADD_HISTORICO: {
      return {
        ...state,
        albumsVisitados: [
          ...state.albumsVisitados,
          action.text,
        ]
      };
    }
    default:
      return state;
  }
};

export const getAlbumsVisitados = state => state.historico.albumsVisitados;

export default reducer;
