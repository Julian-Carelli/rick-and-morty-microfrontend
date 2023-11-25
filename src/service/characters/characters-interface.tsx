export interface CharacterServiceInterface {
  getAllCharacters: (
    paginateOptions: PaginateOptions,
  ) => Promise<CharactersResponse | string>
  getCharacterById: (
    characterId: string,
  ) => Promise<CharactersResponse> | string
}

export type CharactersResponse = {
  results: Characters[]
  paginate?: Paginate
}

export type Info = {
  count: number
  pages: number
}

export type Characters = {
  id: number
  name: string
  species: string
  gender: string
  image: string
  status: string
}

export type Paginate = {
  total: number
  totalPages: number
  page: number
  pageSize: number
}

export type PaginateOptions = {
  page: number
  pageSize: number
}

export type ApiResponse = {
  results: Characters[]
  info?: Info
}
