
export const FiltersContainer = ({children}) => {
  return (
    <div className="flex justify-between items-center bg-gray-700 p-4 border-b border-gray-600 border-solid">
        {children}
    </div>
  )
}

export const ItemsLeft = ({total = 0}) => {
  return (
    <p className="text-gray-400 text-sm">
      {total} items left
    </p>
  )
}

export const FilterButtonContainer = ({children}) => {
  return (
    <div className="flex items-center space-x-2">
      {children}
    </div>
  )
}

export const FilterButton = ({action, active, filter}) => {
  return (
    <button onClick={action} className={`hover:text-white cursor-pointer transition-all duration-300 ease-in-out`
      +(active.toLowerCase().includes(filter.toLowerCase()) ? ' text-blue-400' : ' text-gray-400')}>
        
        {filter}
  
    </button>
  )
}
