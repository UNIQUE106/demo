import React from 'react'

function Logo({color}) {
  return (
    <h2 className={`font-extrabold text-3xl font-lato text-${color}`}><span className='text-green-500'>UGro</span>ceries</h2>
  )
}

export default Logo