import React from 'react'

const Album = ({album}) => {
  return (
    <li className='w-[200px] h-[100px] bg-black flex justify-center items-center text-white text-center'>
        {album.title}
    </li>
  )
}

export default Album