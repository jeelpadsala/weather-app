import React from 'react'
import { PropagateLoader } from 'react-spinners'

export default function Loader() {
  return (
    <div className='container mt-3'>
      <div className='text-center'>
        <PropagateLoader
          color="#000000"
          size={20}
        />
      </div>
    </div>
  )
}
