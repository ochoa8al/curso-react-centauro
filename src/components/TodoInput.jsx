import React, { useState } from 'react'

export const TodoInput = ({addTodo}) => {

  const [title, setTitle] = useState('')

  const handleTodo = (e) => {
    if (e.key === 'Enter' && title.trim()) {
      addTodo({title})
      setTitle('')
    }
  }

  return (
    <div className='mt-6 relative'>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className='border border-gray-500 border-solid p-3 rounded-full'></span>
        </div>
        <input type="text" className='border border-gray-500 border-solid p-3 rounded-full w-full pl-12 focus:shadow-md focus:shadow-blue-700' placeholder='Lavar el carro' 
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={(e) => handleTodo(e)}
        />
    </div>
  )
 }
