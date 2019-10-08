import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
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
import { useDebounce, searchHistory } from "../../utils";
import { setSearchTerm, getAlbums } from "../../store/reducers/albums.reducer";
import PATCH from "../../routes/patch";
import { MESSAGES } from "../../configs";

const Albums = () => {
  let history = useHistory();
  let { artist } = useParams();

  const dispatch = useDispatch();
  const { albums, searchTerm, error } = useSelector(({ albums }) => albums);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const displayAlbums = searchTerm ? albums : searchHistory.get();

  const selectAlbum = album => {
    searchHistory.addAlbum(album);
    history.push(`${PATCH.ALBUM}/${album.id}`);
  };

  useEffect(() => {
    let findParameter = debouncedSearchTerm.replace(/\s/g, "+");
    history.replace(`${PATCH.ALBUMS}/${findParameter}`);
    if (debouncedSearchTerm) getAlbums(findParameter)(dispatch);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (artist) {
      setSearchTerm(artist.replace(/\+/g, " "))(dispatch);
    }
  }, []);

  if (error) history.push(PATCH.LOGIN);

  return (
    <>
      <Search>
        <SearchCaption>{MESSAGES.albums.searchInputCaption}</SearchCaption>
        <SearchContainer>
          <SearchInput
            placeholder={MESSAGES.albums.searchInputPlaceholder}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)(dispatch)}
          />
        </SearchContainer>
        <SearchResponse>
          {searchTerm
            ? MESSAGES.albums.searchResponse(artist)
            : MESSAGES.albums.searchResponseRecently}
        </SearchResponse>
      </Search>

      {displayAlbums && (
        <AlbumContainer>
          {displayAlbums.map(album => (
            <Album key={album.id} onClick={() => selectAlbum(album)}>
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
