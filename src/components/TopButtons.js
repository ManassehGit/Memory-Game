import React from 'react'
import PropTypes from 'prop-types'
import ResetButton from './ResetButton'
import NewGameButton from './NewGameButton'

const TopButtons = props => {
  return (
    <div>
        <ResetButton />
        <NewGameButton />
    </div>
  )
}

TopButtons.propTypes = {}

export default TopButtons