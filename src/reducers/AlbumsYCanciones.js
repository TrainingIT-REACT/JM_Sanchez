import { obtenerAlbumsYCanciones } from "../actions/AlbumsYCanciones";

const initialState = {
  albumsYCanciones: {
    albums: [],
    songs: [],
    loading: true,
    error: false
  }
};

const reducer = (state = initialState.albumsYCanciones, action) => {
  switch (action.type) {
    case String(obtenerAlbumsYCanciones.pending): {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case String(obtenerAlbumsYCanciones.fulfilled): {
      return {
        ...state,
        loading: false,
        error: false,
        albums: action.payload.albums,
        songs: action.payload.songs
      };
    }
    case String(obtenerAlbumsYCanciones.rejected): {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default:
      return state;
  }
};

export const getAlbumsYCanciones = state => state.albumsYCanciones;

export default reducer;
