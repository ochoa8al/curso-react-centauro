import React from 'react'
import { FilterButton, FiltersContainer, ItemsLeft,FilterButtonContainer } from './TodoFilters.components'

export const TodoFilters = ({total, showAllTodos, showActiveTodos, showCompletedTodos, handleClearCompleted, activeFilter}) => {
  return (
    <FiltersContainer>
      <ItemsLeft total={total} />
      <FilterButtonContainer>
        <FilterButton action={() => showAllTodos() } active={activeFilter} filter="All" />
        <FilterButton action={() => showActiveTodos()} active={activeFilter} filter="Active" />
        <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter="Completed" />
      </FilterButtonContainer>

      <button onClick={() => handleClearCompleted()} className='text-gray-400 hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>
        Clear Completed
      </button>
      
    </FiltersContainer>
  )
}
