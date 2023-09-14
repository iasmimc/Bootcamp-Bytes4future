const dados = require("./history.json");

function funcao1() {
  let playsPorArtista = new Map([]);

  for (let i = 0; i < dados.length; i++) {
    const element = dados[i];
    const artista = element.master_metadata_album_artist_name;
    if (playsPorArtista.has(artista)) {
      playsPorArtista.set(artista, playsPorArtista.get(artista) + 1);
    } else {
      playsPorArtista.set(artista, 1);
    }
  }
  return playsPorArtista;
}
function funcao2() {
  let top5Artistas = new Map([]);
}

console.log(funcao1());
