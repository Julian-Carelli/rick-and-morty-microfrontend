import { render, act, waitFor, screen } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { getCharacterMockResponse } from '../__mocks__/charactersMock'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'

fetchMock.enableMocks()

test('render component', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(getCharacterMockResponse))

  await act(async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={['/characters/2']}>
          <Routes>
            <Route
              path="/characters/:characterId"
              element={<CharacterDetails />}
            />
          </Routes>
        </MemoryRouter>
      </I18nextProvider>,
    )
  })

  await waitFor(() => {
    const characterNameElement = screen.getByText('Morty Smith')
    const characterSpeciesElement = screen.getByText('Humano')
    const characterGenderElement = screen.getByText('Masculino')
    const characterAliveElement = screen.getByText('Vivo')

    expect(characterNameElement).toBeTruthy()
    expect(characterSpeciesElement).toBeTruthy()
    expect(characterGenderElement).toBeTruthy()
    expect(characterAliveElement).toBeTruthy()
  })
})
