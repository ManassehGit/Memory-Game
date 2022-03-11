import React from 'react'
import PropTypes from 'prop-types'

const grid = [];
for(let i=1; i<=36; i++){
    grid.push(i);
}

const GameSpace = props => {
    const tile = <div class="blue-04 tileStyle"><i className="iconStyle" class="fa-solid fa-cube"></i></div>;
    const content = grid.map(item => <a href="logo.svg">{tile}</a>);
  return (
    <div className="gridStyle">
        {content}
    </div>
  )
}

GameSpace.propTypes = {}

export default GameSpace