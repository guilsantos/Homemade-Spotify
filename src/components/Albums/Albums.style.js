import styled from 'styled-components'

export const Search = styled.div`
  padding: 32px;
  padding-bottom: 16px;
`

export const SearchCaption = styled.div`
  font-size: 16px;
  color: #FAFAFA;
`

export const SearchContainer = styled.div``

export const SearchInput = styled.input`
  border: 0;
  border-bottom: 2px solid #999999;
  width: calc(100% - 32px);
  line-height: 35px;
  height: 70px;
  background: transparent;
  font-weight: bold;
  font-size: 48px;
  text-align: left;
  color: #FFFFFF;
  ::placeholder {
  color: #999999;
  }
  &:focus {
    outline: none;
  }
`

export const SearchResponse = styled.div`
  font-size: 18px;
  color: #FFFFFF;
  padding-top: 72px;
`

export const AlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1990px;
`

export const Album = styled.div`
  width: 150px;
  padding-top: 24px;
  padding-right: 24px;
  padding-left: 24px;
  margin-right: 8px;
  margin-left: 8px;
  cursor: pointer;
  :hover {
    background-color: #000000;
    opacity: 50%;
  }
`

export const AlbumName = styled.div`
  text-align: center;
  font-size: 16px;
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
  padding-bottom: 40px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
