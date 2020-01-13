const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'

export default () => {
  return fetch(ENDPOINT)
    .then(resp => resp.json()
      .then(respData => respData.results))
}