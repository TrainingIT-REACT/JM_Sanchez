import { createAsyncAction } from "redux-promise-middleware-actions";

export const obtenerAlbumsYCanciones = createAsyncAction("POST", async () => {
  const albums = await fetch("/albums");
  const songs = await fetch("/songs");
  return {
    albums: await albums.json(),
    songs: await songs.json()
  };
});
