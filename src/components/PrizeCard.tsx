export function PrizeCard (props){
    return (
        <div className='prizes__prize'>
            <img className='prizes__imgPrize' src={props.link} alt="" />
            <h2>{props.name}</h2>
            <h3 className='pinkText'>{props.points} points</h3>
        </div>
    )
}
