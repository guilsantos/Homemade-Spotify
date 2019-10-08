import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  ButtonContainer,
  BackButton,
  FlexContainer,
  AlbumName,
  ArtistName,
  Audio,
  MusicList,
  Music,
  Index,
  Name,
  Duration
} from "./Album.style";
import PATCH from "../../routes/patch";
import {
  getAlbum,
  clear,
  setAlbumPreview
} from "../../store/reducers/album.reducer";
import { formatMinutes } from "../../utils";
import { MESSAGES } from "../../configs";

const Album = () => {
  let history = useHistory();
  let { albumId } = useParams();

  const dispatch = useDispatch();
  const { album, error, preview } = useSelector(({ album }) => album);

  const goBack = () => {
    clear(dispatch);
    history.action === "POP" ? history.push(PATCH.ALBUMS) : history.goBack();
  };

  useEffect(() => {
    getAlbum(albumId)(dispatch);
  }, []);

  if (error) history.push(PATCH.LOGIN);

  return (
    <>
      <ButtonContainer>
        <BackButton onClick={goBack}>{MESSAGES.album.backButton}</BackButton>
      </ButtonContainer>
      {album && (
        <FlexContainer>
          <div>
            <img src={album.images[1].url} />
            <AlbumName>{album.name}</AlbumName>
            <ArtistName>{album.artists[0].name}</ArtistName>
            {preview && preview.preview_url && (
              <Audio src={preview.preview_url} autoplay controls />
            )}
          </div>
          <MusicList>
            {album.tracks.items.map((track, index) => (
              <Music
                key={track.id}
                onClick={() => setAlbumPreview(track)(dispatch)}
                active={track.id === preview.id}
              >
                <Index>{index + 1}.</Index>
                <Name>{track.name}</Name>
                <Duration>{formatMinutes(track.duration_ms)}</Duration>
              </Music>
            ))}
          </MusicList>
        </FlexContainer>
      )}
    </>
  );
};

export default Album;
