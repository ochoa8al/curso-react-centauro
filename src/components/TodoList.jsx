import React from 'react'
import { TodoFilters } from './TodoFilters/TodoFilters'
import { Todo } from './Todo'

export const TodoList = ({todos, handleSetCompleted,handleDeleteTodo,showAllTodos,showActiveTodos,showCompletedTodos,handleClearCompleted,activeFilter}) => {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
        {
          todos.map(todo => (
            <Todo key={todo.id} todo={todo} handleSetCompleted={handleSetCompleted} handleDeleteTodo={handleDeleteTodo} />
          ))
        }    

      <TodoFilters 
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  )
}

