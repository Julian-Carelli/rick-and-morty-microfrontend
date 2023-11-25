import {
  ApiResponse,
  CharacterServiceInterface,
  Characters,
} from './characters-interface'

class CharactersService implements CharacterServiceInterface {
  async getAllCharacters() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json()

      return buildResponse(data.results)
    } catch (error) {
      console.error('Error fetching all characters', error)
      return Promise.reject('Error fetching all characters')
    }
  }

  async getCharacterById(characterId: string) {
    try {
      const characterArray = []
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${characterId}`,
      )
      const data = await response.json()
      characterArray.push(data)

      return buildResponse(characterArray)
    } catch (error) {
      console.error(`Error fetching character with ID ${characterId}:`, error)
      return Promise.reject(`Error fetching character with ID ${characterId}`)
    }
  }
}

const buildResponse = (data: ApiResponse) => {
  const results = buildResults(data)
  return {
    results,
  }
}

const buildResults = (data: Characters[]) => {
  return data.map((character) => mapToCharacter(character))
}

const mapToCharacter = (character: Characters) => {
  return {
    id: character.id,
    name: character.name,
    image: character.image,
    species: character.species,
    gender: character.gender,
    status: character.status,
  }
}

export default CharactersService
