import React from 'react'

const FirstComponent = ({data,fn}) => {
  return (
    <div>
        {data}
        <button onClick={()=>{fn(10)}}>set10</button>
    </div>
  )
}

export default FirstComponent