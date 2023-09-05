export function PrizeCard (props){
    const baseUrl = '/src/assets/';
    return (
        <div className='prizes__prize'>
            <img className='prizes__imgPrize' src={baseUrl + props.link} alt="" />
            <h2>{props.name}</h2>
            <h3 className='pinkText'>{props.points} points</h3>
        </div>
    )
}
