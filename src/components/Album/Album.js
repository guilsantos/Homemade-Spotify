import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Title } from "../../configs/theme";
import { getAlbumById } from "../../services";

const Album = () => {
  let history = useHistory();
  let { album } = useParams();

  const [results, setResults] = useState();

  useEffect(() => {
    getAlbumById(album).then(data => setResults(data));
  }, []);

  return (
    <>
      <Title>TELA DE DETALHE DO ALBUM COM LISTAGEM DE MUSICAS</Title>
      <div>
        <button
          onClick={() =>
            history.action === "POP"
              ? history.push("/albums")
              : history.goBack()
          }
        >
          {"< Voltar"}
        </button>
      </div>
      {results && (
        <div>
          <div>
            <img src={results.images[1].url} />
            <div>{results.name}</div>
            <div>{results.artists[0].name}</div>
          </div>
          <div>
            {results.tracks.items.map((track, index) => (
              <div key={track.id}>
                {index + 1} - {track.name} - {track.duration_ms}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Album;
