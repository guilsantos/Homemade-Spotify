import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useDebounce } from "../../utils";
import { getAlbums } from "../../services";
import { Title } from "../../configs/theme";

const Albums = () => {
  const [searchTerm, setSearchTerm] = useState("");
  let history = useHistory();
  let { artist } = useParams();

  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      let findParameter = debouncedSearchTerm.replace(/\s/g, "+");
      history.replace(`/albums/${findParameter}`);
      setIsSearching(true);
      getAlbums(findParameter).then(albums => {
        setIsSearching(false);
        setResults(albums);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (artist) {
      setSearchTerm(artist.replace("+", " "));
    }
  }, []);

  return (
    <>
      <div>Busque por artistas, álbuns ou músicas</div>
      <div>
        <input
          placeholder="Comece a escrever..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {searchTerm ? (
        <div>Resultados encontrados para "{artist && artist.replace("+", " ")}"</div>
      ) : (
        <div>Álbuns buscados recentemente</div>
      )}
      <div>
        {results.map(album => (
          <div onClick={() => history.push(`/album/${album.id}`)}>
            <img src={album.images[2].url} />
            <span>{album.name}</span>
            <span>{album.artists[0].name}</span>
          </div>
        ))}
      </div>
      <div>Álbuns buscados recentemente</div>
      <div>FILEIRA DE ÁLBUNs</div>

      <span>Em pesquisa {isSearching && "PESQUISANDOOOO"}</span>
      <span>RESULTADO DA REQUISIÇÃO: </span>
    </>
  );
};

export default Albums;
