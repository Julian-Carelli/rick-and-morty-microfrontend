export interface CharacterServiceInterface {
  getAllCharacters: () => Promise<CharactersResponse | string>
  getCharacterById: (
    characterId: string,
  ) => Promise<CharactersResponse> | string
}

export type CharactersResponse = {
  results: Characters[]
}

export type Characters = {
  id: number
  name: string
  species: string
  gender: string
  image: string
  status: string
}

export type ApiResponse = Characters[]
