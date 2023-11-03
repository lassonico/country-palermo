import React from 'react'

function Baggy({item}) {
  return (
    <span className='text-white absolute top-1 left-1 bg-[tomato] rounded-full z-50'>{item}</span>
  )
}

export default Baggy