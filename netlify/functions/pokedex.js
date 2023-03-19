exports.handler = async () => {
  const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokedex/kanto'

  const response = await fetch(POKEMON_API_URL)
  const data = await response.json()


  return {
    statusCode: 200,
    body: JSON.stringify({
      data: data
    })
  }
}

