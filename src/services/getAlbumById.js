import { token } from '../utils'

const getAlbumById = id => {
  return fetch(`https://api.spotify.com/v1/albums/${id}`, {
    headers: {
      Authorization: `Bearer ${token.get()}`,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => {
      console.error(error);
      return [];
    });
}

export default getAlbumById
