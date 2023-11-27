import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Characters,
  Paginate,
} from '../../service/characters/characters-interface'
import CharactersService from '../../service/characters/characters'
import ReactPaginate from 'react-paginate'
import { StyledCharacterList } from './CharacterGallery.styles'
import { useTranslation } from 'react-i18next'
import LoadingButton from '../LoadingButton/LoadingButton'

const charactersService = new CharactersService()

const CharacterGallery = ({ path = 'characters' }: { path?: string }) => {
  const [characters, setCharacters] = useState<Characters[]>([])
  const [paginate, setPaginate] = useState<Paginate>()
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const { t } = useTranslation('translations')

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async (currentPage: number) => {
      try {
        const response = await charactersService.getAllCharacters({
          page: currentPage,
          pageSize: 20,
        })
        setCharacters(response.results)
        setPaginate(response.paginate)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData(currentPage)
  }, [currentPage])

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected + 1)
  }

  if (isLoading) return <LoadingButton />

  return (
    <StyledCharacterList>
      <h1>{t('components.CharacterGallery.RickAndMorty.title')}</h1>
      <div className="character-container">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <Link to={`${path}/${character.id}`}>
              <img src={character.image} alt={character.name} />
            </Link>
            <p>{character.name}</p>
            <p>
              {t(
                `components.CharacterGallery.RickAndMorty.character.species.${character.species}`,
              )}
            </p>
          </div>
        ))}
        {paginate && (
          <ReactPaginate
            pageCount={paginate.totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            previousClassName={'previous-arrow'}
            nextClassName={'next-arrow'}
            initialPage={currentPage - 1}
            previousLabel={t('components.CharacterGallery.paginate.previous')}
            nextLabel={t('components.CharacterGallery.paginate.next')}
          />
        )}
      </div>
    </StyledCharacterList>
  )
}

export default CharacterGallery
