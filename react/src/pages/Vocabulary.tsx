import React, { useEffect, useState } from 'react'
import "../css/Vocabulary.css"
import { useGenerateWord, englishVocabulary } from '../hooks/useGenerateWord'
import { useStoreWords } from '../hooks/useStoreWords'

 export function Vocabulary(){
  const words = useStoreWords((state) => state.words)
  const addWords = useStoreWords((state) => state.addWord)
  const reset = useStoreWords((state) => state.reset)
  const [showWords, setShowWords] = useState([]);
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    let wordsSpanglish;
    do{
      wordsSpanglish = useGenerateWord()
      console.log(wordsSpanglish)
    } while(words.includes(wordsSpanglish[0]))

    setShowWords(wordsSpanglish)
    addWords(showWords[0])

    if(words.length == englishVocabulary.length){
      reset()
    }
    
    console.log(words)
    console.log(englishVocabulary)
  }, [counter])
 
  return (
    <div className='vocabulary__container'>
      <h1>Test your vocabulary!</h1>
    <div className='vocabulary__spanishword'>
      {showWords &&
        <p>{showWords[0]}</p>
      }
    <button onClick={() => setCounter(counter + 1)}>Generate word</button>
    </div>

    </div>
  )
}
