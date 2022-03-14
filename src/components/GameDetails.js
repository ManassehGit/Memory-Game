import React from 'react';
import InfoBox from './InfoBox';
import { useStopwatch } from 'react-timer-hook';


const GameDetails = () => {

  let numberOfPlayers = 3;
  let playerGroup = [];
  for(let i=0; i<numberOfPlayers; i++){
    playerGroup.push(i);
  }

  const infoSection = playerGroup.map(player => <InfoBox infoName="Player" infoValue="4"/>);
  const singlePlayer = <div><InfoBox infoName="Time" infoValue="1:53"/><InfoBox infoName="Moves" infoValue="39"/></div>;

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  return (
    <div className='game-details'>
      {numberOfPlayers > 1 ? infoSection: singlePlayer}
    </div>
  )
}

export default GameDetails