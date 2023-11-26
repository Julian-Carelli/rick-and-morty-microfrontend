import { render, act, waitFor, screen, fireEvent } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import CharacterGallery from '../../components/CharacterGallery/CharacterGallery'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import {
  getAllCharactersPage1MockResponse,
  getAllCharactersPage2MockResponse,
} from '../__mocks__/charactersMock'

fetchMock.enableMocks()

beforeEach(() => {
  fetchMock.resetMocks()
})

test('render component', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(getAllCharactersPage1MockResponse))

  await act(async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<CharacterGallery />} />
          </Routes>
        </MemoryRouter>
      </I18nextProvider>,
    )
  })

  await waitFor(() => {
    const CharacterGalleryTitle = screen.getByText('Personajes de Rick y Morty')
    const characterNameElement = screen.getByText('Rick Sanchez')
    const characterName2Element = screen.getByText('Morty Smith')
    const characterName3Element = screen.getByText('Summer Smith')
    const characterName4Element = screen.getByText('Beth Smith')

    expect(CharacterGalleryTitle).toBeTruthy()
    expect(characterNameElement).toBeTruthy()
    expect(characterName2Element).toBeTruthy()
    expect(characterName3Element).toBeTruthy()
    expect(characterName4Element).toBeTruthy()
  })
})

test('Render component after clicking the next arrow', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(getAllCharactersPage1MockResponse))

  await act(async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<CharacterGallery />} />
          </Routes>
        </MemoryRouter>
      </I18nextProvider>,
    )
  })

  await waitFor(() => {
    const CharacterGalleryTitle = screen.getByText('Personajes de Rick y Morty')
    const characterNameElement = screen.getByText('Rick Sanchez')
    const nextButton = document.querySelector('.next-arrow')

    expect(CharacterGalleryTitle).toBeTruthy()
    expect(characterNameElement).toBeTruthy()

    if (nextButton) {
      fireEvent.click(nextButton)
    }
  })

  fetchMock.mockResponseOnce(JSON.stringify(getAllCharactersPage2MockResponse))

  await act(async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<CharacterGallery />} />
          </Routes>
        </MemoryRouter>
      </I18nextProvider>,
    )
  })

  await waitFor(() => {
    const characterNameElement = screen.getByText('Aqua Morty')
    const characterName2Element = screen.getByText('Aqua Rick')
    const characterName3Element = screen.getByText('Arcade Alien')
    const characterName4Element = screen.getByText('Armagheadon')

    expect(characterNameElement).toBeTruthy()
    expect(characterName2Element).toBeTruthy()
    expect(characterName3Element).toBeTruthy()
    expect(characterName4Element).toBeTruthy()
  })
})
