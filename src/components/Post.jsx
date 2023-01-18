import React from 'react'
import Button from './ButtonOutlineBlue'

const Post = ({post}) => {
  return (
    <li className='flex flex-col gap-2 px-20'>
        <h2 className='font-bold'>{post.title}</h2>
        <div className='w-[80%] min-h-16 border-black border p-5 pr-10 flex gap-3'>
            <p className='mr-20'>
                {post.body}
            </p>
            
        </div>
    </li>
  )
}

export default Post