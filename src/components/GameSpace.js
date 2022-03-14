import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {icons} from '../GameItems';

const gridChoice = 4;
//If isNumbers is false then user selected icons
let isNumbers = false;

let gameNumberFontSize = gridChoice === 4 ? '56px' : '44px';

const gameNumberStyle = {
  fontSize: `${gameNumberFontSize}`
}

const columnStyle = {
  gridTemplateColumns: `repeat(${gridChoice}, 1fr)`
}
const grid = [];
for(let i=1; i<=gridChoice**2; i++){
    grid.push(i);
}

const GameSpace = props => {
    const tile = isNumbers ? <div className="blue-04 tileStyle"><div className='white-text' style={gameNumberStyle}>5</div></div> : <div className="blue-04 tileStyle"><FontAwesomeIcon className='iconStyle' icon={icons[2]}/></div>;
    const content = grid.map(item => tile);
  return (
    <div className="gridStyle" style={columnStyle}>
        {content}
    </div>
  )
}


export default GameSpace