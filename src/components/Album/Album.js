import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  ButtonContainer,
  BackButton,
  FlexContainer,
  AlbumName,
  ArtistName,
  MusicList,
  Music,
  Index,
  Name,
  Duration
} from "./Album.style";
import PATCH from '../../routes/patch'
import { getAlbum, clear } from "../../store/reducers/album.reducer";
import { formatMinutes } from "../../utils";
import { messages } from "../../configs";

const Album = () => {
  let history = useHistory();
  let { album } = useParams();

  const dispatch = useDispatch();
  const { album: selectedAlbum, error } = useSelector(store => store.album);

  const [preview, setPreview] = useState("");

  useEffect(() => {
    getAlbum(album)(dispatch);
  }, []);

  if (error) history.push(PATCH.LOGIN);


  return (
    <>
      <ButtonContainer>
        <BackButton
          onClick={() => {
            clear()(dispatch);
            history.action === "POP"
              ? history.push(PATCH.ALBUMS)
              : history.goBack();
          }}
        >
          {messages.album.backButton}
        </BackButton>
      </ButtonContainer>
      {selectedAlbum && (
        <FlexContainer>
          <div>
            <img src={selectedAlbum.images[1].url} />
            <AlbumName>{selectedAlbum.name}</AlbumName>
            <ArtistName>{selectedAlbum.artists[0].name}</ArtistName>
            {preview && <audio src={preview.preview_url} autoplay controls />}
          </div>
          <MusicList>
            {selectedAlbum.tracks.items.map((track, index) => (
              <Music
                key={track.id}
                onClick={() => setPreview(track)}
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
