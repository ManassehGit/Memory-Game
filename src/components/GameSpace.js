import React from 'react'
import PropTypes from 'prop-types'

const grid = [];
for(let i=1; i<=16; i++){
    grid.push(i);
}

const GameSpace = props => {
    const tile = <div className="blue-04 tileStyle"><i className="fa-solid fa-cube iconStyle"></i></div>;
    const content = grid.map(item => tile);
  return (
    <div className="gridStyle">
        {content}
    </div>
  )
}

GameSpace.propTypes = {}

export default GameSpace