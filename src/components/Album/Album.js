import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
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
import { getAlbumById } from "../../services";

const Album = () => {
  let history = useHistory();
  let { album } = useParams();

  const [results, setResults] = useState();

  useEffect(() => {
    getAlbumById(album).then(data => {
      data.error && data.error.status === 401
        ? history.push("/login")
        : setResults(data);
    });
  }, []);

  return (
    <>
      <ButtonContainer>
        <BackButton
          onClick={() =>
            history.action === "POP"
              ? history.push("/albums")
              : history.goBack()
          }
        >
          {"< Voltar"}
        </BackButton>
      </ButtonContainer>
      {results && (
        <FlexContainer>
          <div>
            <img src={results.images[1].url} />
            <AlbumName>{results.name}</AlbumName>
            <ArtistName>{results.artists[0].name}</ArtistName>
          </div>
          <MusicList>
            {results.tracks.items.map(
              (track, index) =>
                console.log("track", track) || (
                  <Music key={track.id}>
                    <Index>{index + 1}.</Index>
                    <Name>{track.name}</Name>
                    <Duration>{track.duration_ms}</Duration>
                    <audio src={track.preview_url} controls />
                  </Music>
                )
            )}
          </MusicList>
        </FlexContainer>
      )}
    </>
  );
};

export default Album;
