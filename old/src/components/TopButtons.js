import React from 'react'
import PropTypes from 'prop-types'
import RestartButton from './RestartButton'
import NewGameButton from './NewGameButton'

const TopButtons = props => {
  return (
    <div>
        <RestartButton />
        <NewGameButton />
    </div>
  )
}

TopButtons.propTypes = {}

export default TopButtons