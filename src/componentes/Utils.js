export const getMinutos = segundos => {
  var minutes = Math.floor(segundos / 60);
  var seconds = segundos % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var total = minutes + ":" + seconds;

  return total;
};
