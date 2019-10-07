import React, { useState } from "react";
import { useHistory } from "react-router"
import { token } from '../../utils'
import { TokenInput, StyledButton } from './Login.style'

const Login = () => {
  const [tokenInput, setTokenInput] = useState("");
  let history = useHistory()

  return (
    <>
      <TokenInput
        placeholder="Insira seu token Spotify"
        value={tokenInput}
        onChange={e => setTokenInput(e.target.value)}
      />
      <StyledButton disabled={!tokenInput} onClick={() => {
        token.set(tokenInput)
        history.action === "POP"
          ? history.push("/albums")
          : history.goBack()
      }
      }>Salvar token e ver albuns</StyledButton>
    </>
  );
};

export default Login;
