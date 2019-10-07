import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useDebounce, searchHistory } from "../../utils";
import { getAlbums } from "../../services";
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
  const [searchTerm, setSearchTerm] = useState("");
  let history = useHistory();
  let { artist } = useParams();

  const [results, setResults] = useState([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      let findParameter = debouncedSearchTerm.replace(/\s/g, "+");
      history.replace(`/albums/${findParameter}`);
      getAlbums(findParameter).then(albums => {
        albums.error && albums.error.status === 401
          ? history.push("/login")
          : setResults(albums);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    setResults(searchHistory.get())
    if (artist) {
      setSearchTerm(artist.replace("+", " "));
    }
  }, []);

  return (
    <>
      <Search>
        <SearchCaption>Busque por artistas, álbuns ou músicas</SearchCaption>
        <SearchContainer>
          <SearchInput
            placeholder="Comece a escrever..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        <SearchResponse>
          {searchTerm
            ? `Resultados encontrados para "${artist &&
                artist.replace("+", " ")}"`
            : "Álbuns buscados recentemente"}
        </SearchResponse>
      </Search>
      <AlbumContainer>
        {results.map(album => (
          <Album
            onClick={() => {
              searchHistory.addAlbum(
                {
                  id: album.id,
                  images: album.images,
                  name: album.name,
                  artists: album.artists
                }
              )
              history.push(`/album/${album.id}`);
            }}
          >
            <img width="150px" src={album.images[1].url} />
            <AlbumName>{album.name}</AlbumName>
            <ArtistName>{album.artists[0].name}</ArtistName>
          </Album>
        ))}
      </AlbumContainer>
    </>
  );
};

export default Albums;
