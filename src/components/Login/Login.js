import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { TokenInput, StyledButton } from "./Login.style";
import { token } from "../../utils";
import { clearError } from "../../store/reducers/albums.reducer";
import PATCH from "../../routes/patch";
import { messages } from "../../configs";

const Login = () => {
  const [tokenInput, setTokenInput] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();

  const saveToken = () => {
    token.set(tokenInput);
    clearError()(dispatch);
    history.action === "POP"
      ? history.push(PATCH.ALBUMS)
      : history.goBack();
  }

  return (
    <>
      <TokenInput
        placeholder={messages.login.tokenInputPlaceholder}
        value={tokenInput}
        onChange={e => setTokenInput(e.target.value)}
      />
      <StyledButton
        disabled={!tokenInput}
        onClick={saveToken}
      >
        {messages.login.button}
      </StyledButton>
    </>
  );
};

export default Login;
