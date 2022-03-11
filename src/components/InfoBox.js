import React from 'react'

const attribName = "Player";
const attribValue = "4";
const InfoBox = () => {
  return (
    <div className='infobox'>
        <span className='light-blue-text smaller-font'>{attribName}</span>
        <span className='deep-blue-text larger-font'>{attribValue}</span>
    </div>
  )
}

export default InfoBox