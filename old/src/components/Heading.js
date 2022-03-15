import React from 'react';
import TopButtons from './TopButtons';

const Heading = props => {
    return (
        <div className='headingStyle'>
            <img className='logo' src="logo.svg" alt='Logo' />
            <TopButtons />
        </div>
    )
}


export default Heading