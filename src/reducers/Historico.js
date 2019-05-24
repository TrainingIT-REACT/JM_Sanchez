import types from "./../actions/Types";

const initialState = {
  albumbsVisitados: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_HISTORICO: {
      return {
        albumbsVisitados: [
          ...state.albumbsVisitados,
          {
            text: action.albumActual
          }
        ]
      };
    }
    default:
      return state;
  }
};

export default reducer;
