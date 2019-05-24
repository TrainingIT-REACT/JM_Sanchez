export const obtenerAlbums = async context => {
  try {
    const res = await fetch("/albums");
    const json = await res.json();
    context.setState(prevState => ({
      ...prevState,
      loadingAlbums: false,
      albums: json
    }));
  } catch (err) {
    console.error("Error accediendo al servidor", err);
  }
};

export const obtenerCanciones = async context => {
  try {
    const res = await fetch("/songs");
    const json = await res.json();
    context.setState(prevState => ({
      ...prevState,
      loadingSongs: false,
      songs: json
    }));
  } catch (err) {
    console.error("Error accediendo al servidor", err);
  }
};

export const getMinutos = segundos => {
  var minutes = Math.floor(segundos / 60);
  var seconds = segundos % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var total = minutes + ":" + seconds;

  return total;
};
