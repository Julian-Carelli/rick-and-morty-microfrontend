export interface CharacterServiceInterface {
    getAllCharacters: () => CharactersResponse | unknown
    getCharacterById: (characterId: string) => CharactersResponse | unknown
}

type CharactersResponse = {
    results: Characters[]
}

export type Characters = {
    id: number;
    name: string;
    species: string;
    gender: string;
    image: string;
    status: string;
}

export type ApiResponse = Characters[]