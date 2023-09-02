import React from 'react'
import "../css/Vocabulary.css"
import { useGenerateWord } from '../hooks/useGenerateWord'

 export function Vocabulary(){
 const words = useGenerateWord()
  return (
    <div className='vocabulary__container'>
      <h1>Test your vocabulary!</h1>
    <div className='vocabulary__spanishword'>
      <p>{words[1]}</p>
    <button onClick={useGenerateWord}>Generate word</button>
    </div>

    </div>
  )
}
