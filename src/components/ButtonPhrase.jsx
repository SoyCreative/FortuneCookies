import getRandomElementFromArray from "../utils/randomElementFromArray"
import phrase from '../utils/phrases.json'

const ButtonPhrase = ({setPhraseRandom, setPathRandom, arrBackground}) => {
    
    const handleRandomPhrase = () => {
        const newRandomPhrase = getRandomElementFromArray(phrase)
        setPhraseRandom(newRandomPhrase)
        const newPath = getRandomElementFromArray(arrBackground)
        setPathRandom(newPath)
        
    }
  return (
    <button className="app__btn" onClick={handleRandomPhrase}>Probar mi suerte</button>
  )
}

export default ButtonPhrase