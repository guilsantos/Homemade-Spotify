import React, { useState } from "react";
import { useHistory } from "react-router"
import { token } from '../../utils'
import { Title } from '../../configs/theme'

const Login = () => {
  const [tokenInput, setTokenInput] = useState("");
  let history = useHistory()

  return (
    <>
      <Title>TELA DE LOGIN COM INPUT DO TOKEN</Title>
      <input
        placeholder="Insira seu token Spotify"
        value={tokenInput}
        onChange={e => setTokenInput(e.target.value)}
      />
      <button disabled={!tokenInput} onClick={() => {
        token.set(tokenInput)
        history.push("/albums")
      }}>Salvar token e ver albuns</button>
    </>
  );
};

export default Login;
