import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useDebounce, searchHistory } from "../../utils";
import {
  setSearchTerm,
  getAlbums
} from "../../store/reducers/albums.reducer";
import {
  Search,
  SearchCaption,
  SearchContainer,
  SearchInput,
  SearchResponse,
  AlbumContainer,
  Album,
  AlbumName,
  ArtistName
} from "./Albums.style";

const Albums = () => {
  let history = useHistory();
  let { artist } = useParams();

  const dispatch = useDispatch();
  const { albums, searchTerm, error } = useSelector(({ albums }) => albums);

  if (error) history.push("/login")

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      let findParameter = debouncedSearchTerm.replace(/\s/g, "+");
      history.replace(`/albums/${findParameter}`);
      getAlbums(findParameter)(dispatch);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (artist) {
      setSearchTerm(artist.replace("+", " "))(dispatch);
    }
  }, []);

  const displayAlbums = searchTerm ? albums : searchHistory.get()

  return (
    <>
      <Search>
        <SearchCaption>Busque por artistas, álbuns ou músicas</SearchCaption>
        <SearchContainer>
          <SearchInput
            placeholder="Comece a escrever..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)(dispatch)}
          />
        </SearchContainer>
        <SearchResponse>
          {console.log("artist", artist)}
          {searchTerm
            ? `Resultados encontrados para "${artist ?
                artist.replace("+", " ") : ""}"`
            : "Álbuns buscados recentemente"}
        </SearchResponse>
      </Search>

      {displayAlbums && (
        <AlbumContainer>
          {displayAlbums.map(album => (
            <Album
              key={album.id}
              onClick={() => {
                searchHistory.addAlbum({
                  id: album.id,
                  images: album.images,
                  name: album.name,
                  artists: album.artists
                });
                history.push(`/album/${album.id}`);
              }}
            >
              <img width="150px" src={album.images[1].url} />
              <AlbumName>{album.name}</AlbumName>
              <ArtistName>{album.artists[0].name}</ArtistName>
            </Album>
          ))}
        </AlbumContainer>
      )}
    </>
  );
};

export default Albums;
