import { token } from "../utils";

const getAlbums = search => {
  const queryString = `q=${search}&type=album&limit=10`;
  return fetch(`https://api.spotify.com/v1/search?${queryString}`, {
    headers: {
      Authorization: `Bearer ${token.get()}`,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => res.albums.items)
    .catch(error => {
      console.error(error);
      return {
        error: {
          status: 401,
          message: "Invalid access token"
        }
      };
    });
};

export default getAlbums;
