import { render, act, waitFor, screen } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { getCharacterMockResponse } from '../__mocks__/charactersMock'

fetchMock.enableMocks()

test('render component', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(getCharacterMockResponse))

  await act(async () => {
    render(
      <MemoryRouter initialEntries={['/characters/2']}>
        <Routes>
          <Route
            path="/characters/:characterId"
            element={<CharacterDetails />}
          />
        </Routes>
      </MemoryRouter>,
    )
  })

  await waitFor(() => {
    const characterNameElement = screen.getByText('Morty Smith')
    const characterSpeciesElement = screen.getByText('Human')
    const characterGenderElement = screen.getByText('Male')
    const characterAliveElement = screen.getByText('Alive')

    expect(characterNameElement).toBeTruthy()
    expect(characterSpeciesElement).toBeTruthy()
    expect(characterGenderElement).toBeTruthy()
    expect(characterAliveElement).toBeTruthy()
  })
})
