import '../css/Prizes.css'
import { PrizeCard } from '../components/PrizeCard'
export function Prizes(){
  return (
    <div className='prizes__container'>
        <h1>Claim your <span className='pinkText'>prize</span>!</h1>
        <div className='prizes__row'>
            <PrizeCard link="/public/chupachups.png" name="Chupachups" points={1000}/>
            <PrizeCard link="/public/cafe.jpg" name="Cafe" points={1500}/>
        </div>
        <div className='prizes__row'>
            <PrizeCard link="/public/crema_manos.jpeg" name="Crema" points={2000}/>
            <PrizeCard link="/public/karmex.jpeg" name="Carmex" points={4000}/>
        </div>
        <div className='prizes__row'>
            <PrizeCard link="/public/chaqueta.png" name="Chaqueta" points="10k"/>
            <PrizeCard link="/public/iphone.jpeg" name="Iphone" points="1m"/>
        </div>
    </div>
  )
}
