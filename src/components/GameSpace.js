import React from 'react'
import PropTypes from 'prop-types'

const tileStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridColumn: '1 / span 2'
}

const iconStyle={
    fontSize: '3em',
    color: 'white'
}

const gridStyle={
    display: 'flex', 
    justifyContent: 'center',
    flexWrap: 'wrap'
}

const grid = [];
for(let i=1; i<=36; i++){
    grid.push(i);
}

const GameSpace = props => {
    const tile = <div style={tileStyle} class="blue-04"><i style={iconStyle} class="fa-solid fa-cube"></i></div>;
  return (
    <div style={gridStyle}>
        {grid.map(item => tile)}
    </div>
  )
}

GameSpace.propTypes = {}

export default GameSpace