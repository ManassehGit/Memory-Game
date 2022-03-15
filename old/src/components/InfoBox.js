import React from 'react'


const InfoBox = (props) => {
    const attribName = props.infoName;
    const attribValue = props.infoValue;

  return (
    <div className='infobox'>
        <span className='light-blue-text smaller-font'>{attribName}</span>
        <span className='deep-blue-text larger-font'>{attribValue}</span>
    </div>
  )
}

export default InfoBox;