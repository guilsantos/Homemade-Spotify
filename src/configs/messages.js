const MESSAGES = {
  login: {
    tokenInputPlaceholder: "Insira seu token Spotify",
    button: "Salvar token e ver albuns"
  },
  album: {
    backButton: "< Voltar"
  },
  albums: {
    searchInputCaption: "Busque por artistas, álbuns ou músicas",
    searchInputPlaceholder: "Comece a escrever...",
    searchResponse: artist =>
      `Resultados encontrados para "${artist ? artist.replace(/\+/g, " ") : ""}"`,
    searchResponseRecently: "Álbuns buscados recentemente"
  }
};

export default MESSAGES;
