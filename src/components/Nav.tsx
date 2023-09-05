import '../css/Nav.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faSpellCheck, faTrophy } from '@fortawesome/free-solid-svg-icons'

export const Nav = () => {
  return (
    <nav>
        <h1>Speak<span className="pink">Easy</span></h1>
        <div className="menu">
            <ul className="menuList">
                <li><Link className='nav__link underline' to={"/vocabulary"} ><FontAwesomeIcon icon={faBook} style={{color: "#ffffff",}} /> Vocabulary</Link></li>
                <li><Link className='nav__link underline' to={"/vocabulary"} ><FontAwesomeIcon icon={faSpellCheck} style={{color: "#ffffff",}} /> Grammar</Link></li>
                <li><Link className='nav__link underline' to={"/prizes"} ><FontAwesomeIcon icon={faTrophy} style={{color: "#ffffff",}} /> Prizes</Link></li>
                
            </ul>
        </div>
    </nav>
  )
}

// var styles = {
//     nav: {
//         display: 'flex', 
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding-block: 20px;
//     padding-inline: 30px;
//     }
// }