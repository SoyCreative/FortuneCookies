
import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrases from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementFromArray'
import copyRight from './components/copyRight'

const arrBackground = [1, 2, 3, 4, 5, 6, 7, 8]

function App() {
  
  const initialPhrase = randomElementFromArray(phrases)
  const initialPath =  randomElementFromArray(arrBackground)
  
  const [phraseRandom, setPhraseRandom] = useState(initialPhrase)
  const [pathRandom, setPathRandom] = useState(initialPath)
  
  const objStyle = {
    backgroundImage: `url('/images/fondo${pathRandom}.jpg'), url('/images/fondo${pathRandom}.png')`    
  }
    
  return (
   <div style={objStyle} className='app'>
   <h1 className='app__title'>Galleta de la fortuna</h1>
   <ButtonPhrase 
    setPhraseRandom={setPhraseRandom} 
    setPathRandom={setPathRandom}
    arrBackground={arrBackground}
    />
   <PhrasesCard  phraseRandom={phraseRandom}/>
   <copyRight copyRight={copyRight} />
   </div>
  )
}

export default App
