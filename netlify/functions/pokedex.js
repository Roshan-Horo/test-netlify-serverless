const fetch = require('node-fetch')

exports.handler = async (event, context) => {
  const eventBody = JSON.parse(event.body)
  const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.region

  const response = await fetch(POKEMON_API_URL)
  const data = await response.json()


  return {
    statusCode: 200,
    body: JSON.stringify({
      data: data
    })
  }
}

