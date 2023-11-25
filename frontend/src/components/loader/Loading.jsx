import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <HashLoader color="#FFA500"/>
    </div>
  )
}

export default Loading