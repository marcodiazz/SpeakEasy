import '../css/prizes.css'
import { PrizeCard } from '../components/PrizeCard'
export function Prizes(){
  return (
    <div className='prizes__container'>
        <h1>Claim your <span className='pinkText'>prize</span>!</h1>
        <div className='prizes__row'>
            <PrizeCard link="chupachups.png" name="Chupachups" points={1000}/>
            <PrizeCard link="cafe.jpg" name="Cafe" points={1500}/>
        </div>
        <div className='prizes__row'>
            <PrizeCard link="crema_manos.jpeg" name="Crema" points={2000}/>
            <PrizeCard link="karmex.jpeg" name="Carmex" points={4000}/>
        </div>
        <div className='prizes__row'>
            <PrizeCard link="chaqueta.png" name="Chaqueta" points="10k"/>
            <PrizeCard link="iphone.jpeg" name="Iphone" points="1m"/>
        </div>
    </div>
  )
}
