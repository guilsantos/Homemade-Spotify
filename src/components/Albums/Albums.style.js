import styled from 'styled-components'

export const SearchCaption = styled.div`
  font-size: 16px;
  color: #FAFAFA;
`

export const SearchContainer = styled.div``

export const SearchInput = styled.input`
  border: 0;
  border-bottom: 2px solid #999999;
  width: 80%;
  line-height: 35px;
  height: 70px;
  padding: 10px;
  background: transparent;
  font-weight: bold;
  font-size: 48px;
  text-align: left;
  color: #999999;
  &:focus {
    outline: none;
  }
`

export const Search = styled.input`
  font-size: 24px;
  color: #FAFAFA;
  color: #000;
`

// export const SearchInput = styled.input`
//   display: block;
//   width: 100%;
//   padding-top: $width/15;
//   border: none;
//   border-radius: 0; // For iOS
//   // border-bottom: solid $width/150 rgba(white, .5);
//   color: white;
//   background: $main-color;
//   font-size: $width/15;
//   transition: .3s ease;
//   &:valid {
//     // border-bottom-color: rgba(white, .5);
//     ~label {
//       top: 0;
//       font: 700 $width/25 Roboto;
//       color: rgba(white, .5);
//     }
//   }
//   &:focus {
//     outline: none;
//     // border-bottom-color: $secondary-color;
//     ~label {
//       top: 0;
//       font: 700 $width/25 Roboto;
//       color: $secondary-color;
//     }
    
      
//     ~ .bar:before {
//     transform: translateX(0);
//     }
//   }

//   // Stop Chrome's hideous pale yellow background on auto-fill
  
//   &:-webkit-autofill {
//     -webkit-box-shadow: 0 0 0px 1000px $main-color inset;
//     -webkit-text-fill-color: white !important;
//     // border-bottom-color: rgba(white, .5);
//   }
//   color: #000;
// `

export const SearchResponse = styled.div`
  font-size: 18px;
  color: #FFFFFF;
`

export const AlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Album = styled.div`
  width: 200px;
`

export const AlbumName = styled.div`
  text-align: center;
  font-size: 16px;
  color: #FAFAFA;
`

export const ArtistName = styled.div`
  text-align: center;
  font-size: 14px;
  color: #999999;
`






export const MusicList = styled.div`
  width: 100%;
`

export const Index = styled.div `
  font-size: 18px;
  color: #999999;
  width: 32px;
`

export const Duration = styled.div `
  font-size: 18px;
  color: #999999;
  margin-left: auto;
`
