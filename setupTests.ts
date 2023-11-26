/* eslint-disable @typescript-eslint/no-unused-vars */
// src/setupTests.js
import '@testing-library/jest-dom'
import { initReactI18next } from 'react-i18next'
import { use } from 'i18next'

use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        components: {
          CharacterGallery: {
            RickAndMorty: {
              title: 'Rick And Morty Characters',
              character: {
                species: {
                  Human: 'Human',
                  Alien: 'Alien',
                  'Mythological Creature': 'Mythological Creature',
                  Humanoid: 'Humanoid',
                  unknown: 'unknown',
                },
                gender: {
                  Male: 'Male',
                  Female: 'Female',
                  Genderless: 'Genderless',
                },
                status: {
                  Alive: 'Alive',
                  Dead: 'Dead',
                  unknown: 'Disappeared',
                },
              },
            },
            paginate: {
              next: 'Next',
              previous: 'Previous',
            },
          },
          CharacterDetails: {
            backButton: {
              title: 'Return to Home',
            },
          },
        },
      },
    },
    es: {
      translations: {
        components: {
          CharacterGallery: {
            RickAndMorty: {
              title: 'Personajes de Rick y Morty',
              character: {
                species: {
                  Human: 'Humano',
                  Alien: 'Extraterrestre',
                  'Mythological Creature': 'Criatura Mitológica',
                  Humanoid: 'Humanoide',
                  unknown: 'Desconocido',
                },
                gender: {
                  Male: 'Masculino',
                  Female: 'Femenino',
                  Genderless: 'Sin género',
                },
                status: {
                  Alive: 'Vivo',
                  Dead: 'Muerto',
                  unknown: 'Desaparecido',
                },
              },
            },
            paginate: {
              next: 'Siguiente',
              previous: 'Anterior',
            },
          },
          CharacterDetails: {
            backButton: {
              title: 'Regresar a la Home',
            },
          },
        },
      },
    },
  },
  lng: 'es',
})
