import styled from 'styled-components'
import { BigTextGrey, BigTextWhite, LittleText } from '../../configs/theme'

export const FlexContainer = styled.div`
  display: flex;
`

export const AlbumName = styled.div`
  text-align: center;
  ${BigTextWhite}
`

export const ArtistName = styled.div`
  text-align: center;
  ${LittleText}
`

export const MusicList = styled.div`
  width: 100%;
`

export const Music = styled(FlexContainer)``

export const Index = styled.div `
  ${BigTextGrey}
  width: 32px;
`

export const Name = styled.div `
  ${BigTextWhite}
`

export const Duration = styled.div `
  ${BigTextGrey}
  margin-left: auto;
`
