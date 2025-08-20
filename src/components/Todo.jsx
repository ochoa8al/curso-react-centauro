import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";


export const Todo = ({todo, handleSetCompleted,handleDeleteTodo}) => {
  const {id,title, completed} = todo

  return (
    <div className='flex items-center justify-between p-4 bg-gray-700 border-b border-gray-600 border-solid'>
        <div className='flex items-center'>
          {
            completed 
            ? (
             <div onClick={() => handleSetCompleted(id)} className='text-green-700 rounded-full cursor-pointer bg-white/70'>
                <FaCheckCircle className='w-7 h-7'/>
             </div>                
            ) 
            : (<span onClick={() => handleSetCompleted(id)}className='border-solid border border-gray-500 p-3 rounded-full cursor-pointer'></span>)
          }            

            <p className={'pl-3 ' + (completed && 'line-through')}>
                {title}
            </p>
        </div>
        <button className='cursor-pointer' onClick={() => handleDeleteTodo(id)}>
            <FaTrashCan/>
        </button>
    </div>
  )
}
