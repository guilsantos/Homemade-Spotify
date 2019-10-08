import React from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { TokenInput, StyledButton } from "./Login.style";
import { token } from "../../utils";
import { clearError } from "../../store/reducers/albums.reducer";
import { setTokenInput } from "../../store/reducers/login.reducer";
import PATCH from "../../routes/patch";
import { MESSAGES } from "../../configs";

const Login = () => {
  let history = useHistory();

  const dispatch = useDispatch();
  const { tokenInput } = useSelector(({ login }) => login);

  const saveToken = () => {
    token.set(tokenInput);
    clearError()(dispatch);
    history.action === "POP" || history.action === "REPLACE"
      ? history.push(PATCH.ALBUMS)
      : history.goBack();
  };

  return (
    <>
      <TokenInput
        placeholder={MESSAGES.login.tokenInputPlaceholder}
        value={tokenInput}
        onChange={e => setTokenInput(e.target.value)(dispatch)}
      />
      <StyledButton disabled={!tokenInput} onClick={saveToken}>
        {MESSAGES.login.button}
      </StyledButton>
    </>
  );
};

export default Login;
