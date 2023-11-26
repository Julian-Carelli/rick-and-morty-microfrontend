export const getCharacterMockResponse = {
  id: '2',
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
}

export const getAllCharactersPage1MockResponse = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null,
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
      id: 2,
      name: 'Morty Smith',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    },
    {
      id: 3,
      name: 'Summer Smith',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    },
    {
      id: 4,
      name: 'Beth Smith',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    },
  ],
}

export const getAllCharactersPage2MockResponse = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character?page=3',
    prev: 'https://rickandmortyapi.com/api/character?page=1',
  },
  results: [
    {
      id: 21,
      name: 'Aqua Morty',
      status: 'unknown',
      species: 'Humanoid',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
    },
    {
      id: 22,
      name: 'Aqua Rick',
      status: 'unknown',
      species: 'Humanoid',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/22.jpeg',
    },
    {
      id: 23,
      name: 'Arcade Alien',
      status: 'unknown',
      species: 'Alien',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/23.jpeg',
    },
    {
      id: 24,
      name: 'Armagheadon',
      status: 'Alive',
      species: 'Alien',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/24.jpeg',
    },
  ],
}
