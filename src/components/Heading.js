import React from 'react';
import PropTypes from 'prop-types';
import TopButtons from './TopButtons';

const headingStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '3em 0em'
}

const Heading = props => {
    return (
        <div style={headingStyle}>
            <img src="logo.svg" alt='Logo' />
            <TopButtons />
        </div>
    )
}

Heading.propTypes = {}

export default Heading