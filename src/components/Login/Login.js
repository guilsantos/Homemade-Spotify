import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { TokenInput, StyledButton } from "./Login.style";
import { token } from "../../utils";
import { clearError } from "../../store/reducers/albums.reducer";

const Login = () => {
  const [tokenInput, setTokenInput] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <TokenInput
        placeholder="Insira seu token Spotify"
        value={tokenInput}
        onChange={e => setTokenInput(e.target.value)}
      />
      <StyledButton
        disabled={!tokenInput}
        onClick={() => {
          token.set(tokenInput);
          clearError()(dispatch);
          history.action === "POP" ? history.push("/albums") : history.goBack();
        }}
      >
        Salvar token e ver albuns
      </StyledButton>
    </>
  );
};

export default Login;
