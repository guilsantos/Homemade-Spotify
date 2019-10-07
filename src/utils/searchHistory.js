const ALBUM_HISTORY_LIMIT = 10;

const get = () => JSON.parse(localStorage.getItem("search_history")) || [];
const addAlbum = album => {
  const albumHistory = get().filter(item => item.id !== album.id);
  albumHistory.unshift(album);
  localStorage.setItem(
    "search_history",
    JSON.stringify(albumHistory.slice(0, ALBUM_HISTORY_LIMIT))
  );
};

export default { get, addAlbum };
