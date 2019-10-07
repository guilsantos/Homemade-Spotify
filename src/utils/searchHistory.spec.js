import searchHistory from './searchHistory'

describe('searchHistory', () => {
  it('Set and get a album', () => {
    let history = searchHistory.get()
    expect(history).toEqual([])

    searchHistory.addAlbum('First album')

    history = searchHistory.get()
    expect(history).toEqual(['First album'])
  })
})
