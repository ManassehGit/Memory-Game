import React from 'react'

const attribName = "Player";
const attribValue = "4";
const InfoBox = () => {
  return (
    <div className='infobox'>
        <span>{attribName}</span>
        <span>{attribValue}</span>
    </div>
  )
}

export default InfoBox