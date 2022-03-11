import React from 'react';
import InfoBox from './InfoBox';

let numberOfPlayers = 5;
let playerGroup = [];
for(let i=0; i<numberOfPlayers; i++){
  playerGroup.push(i);
}

const infoSection = playerGroup.map(player => <InfoBox />)
const GameDetails = () => {
  return (
    <div className='game-details'>
      {infoSection}
    </div>
  )
}

export default GameDetails