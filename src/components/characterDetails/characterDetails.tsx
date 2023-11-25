import { useState, useEffect } from 'react'
import { CharactersResponse } from '../../service/characters/characters-interface'
import { useParams } from 'react-router-dom'
import CharactersService from '../../service/characters/characters'

const charactersService = new CharactersService()

const CharacterDetails = () => {
  const { characterId } = useParams<{ characterId: string }>()
  const [character, setCharacter] = useState<CharactersResponse>()

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        if (!characterId) return

        const response = await charactersService.getCharacterById(characterId)

        if (!response || response?.results.length === 0) return

        setCharacter(response)
      } catch (error) {
        console.error('Error fetching character data:', error)
      }
    }

    fetchCharacter()
  }, [characterId])

  if (!character) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {character.results.map((item) => (
        <div key={item.id}>
          <h1 style={{ textAlign: 'center' }}>{item.name}</h1>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={item.image} style={{ width: 300, height: 300 }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <p>Species: {item.species}</p>
            <p>Gender: {item.gender}</p>
            <p>Species: {item.species}</p>
            <p>Status: {item.status}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CharacterDetails
