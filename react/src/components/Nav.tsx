import React from 'react'

export const Nav = () => {
  return (
    <nav>
        <h1>Speak<span className="pink">Easy</span></h1>
        <div className="menu">
            <ul className="menuList">
                <li>Vocabulary</li>
                <li>Grammar</li>
                <li>Topics</li>
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