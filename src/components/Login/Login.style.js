import styled from 'styled-components'

export const TokenInput = styled.input`
  border: 0;
  border-bottom: 2px solid #999999;
  width: 100%;
  line-height: 35px;
  height: 70px;
  background: transparent;
  font-weight: bold;
  font-size: 48px;
  text-align: left;
  color: #FFFFFF;
  margin-bottom: 32px;
  ::placeholder {
  color: #999999;
  }
  &:focus {
    outline: none;
  }
`

export const StyledButton = styled.button`
  font-size: 36px;
  border-width: 0;
  padding: 4px 12px;
  background-color: transparent;
  color: #FFFFFF;
  cursor: pointer;
  :hover {
    background-color: #000000;
    opacity: 50%;
  }
`
