import styled from 'styled-components'

export const ButtonContainer = styled.div`
  padding: 32px;
  padding-bottom: 40px;
`

export const BackButton = styled.button`
  font-size: 18px;
  border-width: 0;
  padding: 4px 12px 4px 0;
  background-color: transparent;
  color: #FAFAFA;
  cursor: pointer;
  :hover {
    background-color: #000000;
    opacity: 50%;
  }
  :focus {
    outline: 0;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  padding: 32px;
  padding-top: 0;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`

export const AlbumName = styled.div`
  text-align: center;
  font-size: 18px;
  color: #FAFAFA;
  padding-top: 12px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const ArtistName = styled.div`
  text-align: center;
  font-size: 14px;
  color: #999999;
  padding-top: 12px;
  padding-bottom: 12px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Audio = styled.audio`
  :focus {
    outline: none;
  }
`

export const MusicList = styled.div`
  width: 100%;
  padding-left: 64px;

  @media (max-width: 740px) {
    padding-left: 0;
  }
`

export const Music = styled.div`
  display: flex;
  padding: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  :hover {
    background-color: #000000;
    opacity: 50%;
  }
  ${({ active }) => active && `
    background-color: #000000;
    opacity: 50%;
  `}
`

export const Index = styled.div `
  font-size: 18px;
  color: #999999;
  width: 32px;
`

export const Name = styled.div `
  font-size: 18px;
  color: #FAFAFA;
`

export const Duration = styled.div `
  font-size: 18px;
  color: #999999;
  margin-left: auto;
`
