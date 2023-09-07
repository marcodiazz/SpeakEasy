// import "../css/Vocabulary.css"
import {generateWord} from './wordlist'

  async function getData(){
    let words = await generateWord()
    const res = { 
      word : words[0]
    }
    return res
  }

 export default async function Vocabulary(){
  let data = await getData()
  
  async function newWord(){
    'use server'
    console.log('ok')
    return await getData()
  }
  async function create(formData: FormData){
    'use server'
    let answer = formData.get('answer')
    if(answer) console.log('buenas noches')
    
    
  }

  return (
    <div className='vocabulary__container'>
      <h1>Test your vocabulary!</h1>
    <div className='vocabulary__spanishword_container'>
      <p className='vocabulary__spanishword'>{}</p>
    </div>
    <div className='vocabulary__answers_container'>
      <button>Show Answer</button>
      <p className='vocabulary__englishword'>{data.word}</p>
  
    </div>
      <form action={create}>
        <input name='answer' type="text" placeholder='Answer' />
        <button type="submit">press me</button>
      </form>

    
    <div className='vocabulary__spanishword_container'>
    <form action={newWord}>
      <button type='submit' >Generate word</button>
    </form>
    <p className='vocabulary__points'></p>
      </div>

    </div>
  )
}
