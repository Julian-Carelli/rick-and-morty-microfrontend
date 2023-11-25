import {
  ApiResponse,
  CharacterServiceInterface,
  Characters,
  Info,
  PaginateOptions,
} from './characters-interface'

class CharactersService implements CharacterServiceInterface {
  public async getAllCharacters(paginateOptions: PaginateOptions) {
    try {
      const { page } = paginateOptions
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`,
      )
      const data = await response.json()

      return buildResponse(data, paginateOptions)
    } catch (error) {
      console.error('Error fetching all characters', error)
      return Promise.reject('Error fetching all characters')
    }
  }

  public async getCharacterById(characterId: string) {
    try {
      const characterArray: { results: Characters[] } = {
        results: [],
      }
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${characterId}`,
      )

      const data = await response.json()
      characterArray.results.push(data)

      return buildResponse(characterArray)
    } catch (error) {
      console.error(`Error fetching character with ID ${characterId}:`, error)
      return Promise.reject(`Error fetching character with ID ${characterId}`)
    }
  }
}

const buildResponse = (
  data: ApiResponse,
  paginateOptions?: PaginateOptions,
) => {
  const { info } = data

  const results = buildResults(data)
  return {
    results,
    paginate:
      paginateOptions && info
        ? buildPaginate(info, paginateOptions)
        : undefined,
  }
}

const buildResults = (data: ApiResponse) => {
  const { results } = data

  return results.map((character) => mapToCharacter(character))
}

const buildPaginate = (info: Info, paginateOptions: PaginateOptions) => {
  const { page, pageSize } = paginateOptions
  const { count, pages } = info

  return {
    total: count,
    totalPages: pages,
    page: Number(page),
    pageSize: Number(pageSize),
  }
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
