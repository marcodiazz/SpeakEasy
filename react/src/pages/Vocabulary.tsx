import React, { useEffect, useState } from 'react'
import "../css/Vocabulary.css"
import { useGenerateWord, englishVocabulary } from '../hooks/useGenerateWord'
import { useStoreWords } from '../hooks/useStoreWords'

 export function Vocabulary(){
  const words = useStoreWords((state) => state.words)
  const addWords = useStoreWords((state) => state.addWord)
  const reset = useStoreWords((state) => state.reset)
  const [showWords, setShowWords] = useState([]);
  const [counter, setCounter] = useState(0);
  const [answerSubmit, setAnswer] = useState("")

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
  }, [counter])
  
  function checkAnswer(e){
    // e.preventDefault();
    if(e.target.value == showWords[1]){
      setCounter(counter + 1)
      e.target.value = ""
    }
    setAnswer(e.target.value)
   
    console.log("Counter: " + counter)
    console.log("Answer: " + e.target.value)

  }

  return (
    <div className='vocabulary__container'>
      <h1>Test your vocabulary!</h1>
    <div className='vocabulary__spanishword_container'>
      {showWords &&
        <p className='vocabulary__spanishword'>{showWords[0]}</p>
      }
    </div>
    {showWords &&
        <p className='vocabulary__englishword'>{showWords[1]}</p>
      }
    
      <input type="text" placeholder='Answer' onChange={(e)=>{checkAnswer(e)}} />

    
    <div className='vocabulary__spanishword_container'>
    <button onClick={() => setCounter(counter + 1)}>Generate word</button>
    <p className='vocabulary__points'>{counter}</p>
      </div>

    </div>
  )
}
