import React from 'react'

const InfoCards = ({valueName , valueNumber , description , color}) => {
  return (
    <div className="flex justify-between items-center p-4" style={color}> 
        <div className="flex gap-2 justify-between" >
            <span>{valueName}</span>
            <span>{valueNumber}</span>
        </div>
        <span>{description}</span>
    </div>
  )
}

export default InfoCards