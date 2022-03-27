import React from 'react'
import Avatar from 'react-avatar';

export default function Client() {
  return (
    <div className='client'>
      <Avatar name= "Vishwash Bajpai" size={50} round='14px' />
      <span className='userName'>Vishwash Bajpai</span>
    </div>
  )
}
