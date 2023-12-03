import React from 'react'

const InfoCards = ({valueName , valueNumber , description , color}) => {
  return (
    <div className="flex justify-between items-center p-[1vw] title " style={color}> 
        <div className="flex gap-[0.5vw] justify-between" >
            <span>{valueName}</span>
            <span>{valueNumber}</span>
        </div>
        <span>{description}</span>
    </div>
  )
}

export default InfoCards