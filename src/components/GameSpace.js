import React from 'react'
import PropTypes from 'prop-types'

const choice = 6;
const columnStyle = {
  gridTemplateColumns: `repeat(${choice}, 1fr)`
}
const grid = [];
for(let i=1; i<=choice**2; i++){
    grid.push(i);
}

const GameSpace = props => {
    const tile = <div className="blue-04 tileStyle"><i className="fa-solid fa-cube iconStyle"></i></div>;
    const content = grid.map(item => tile);
  return (
    <div className="gridStyle" style={columnStyle}>
        {content}
    </div>
  )
}

GameSpace.propTypes = {}

export default GameSpace