
import { useEffect, useState } from 'react'
import './App.css'
import { Title } from './components/Title'
import { Todo } from './components/Todo'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
  const listaTareas = [
    {id: 1, title: 'Lavar el carro', completed: false},
    {id: 2, title: 'Limpiar la casa', completed: true},
    {id: 3, title: 'Hacer la compra', completed: false}
  ]

  const [todos, setTodos] = useState(listaTareas)

  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const addTodo = ({title}) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const handleSetCompleted = (id) => {
    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(updatedList)
  }

  const handleDeleteTodo = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodos(updatedList)
  }

  const showAllTodos = () => {
    setActiveFilter('all')
  }

  const showActiveTodos = () => {
    console.log('showActiveTodos')
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }

  const handleClearCompleted = () => {
    const updatedList = todos.filter(todo => !todo.completed)
    setTodos(updatedList)
  }

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos)
    } else if (activeFilter === 'active') {
      setFilteredTodos(todos.filter(todo => !todo.completed))
    } else if (activeFilter === 'completed') {
      setFilteredTodos(todos.filter(todo => todo.completed))
    }

},[activeFilter, todos])

  return (
    <div className='bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5'>
      <div className='container flex flex-col max-w-xl'>
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList 
        todos={filteredTodos} 
        activeFilter={activeFilter}
        handleSetCompleted={handleSetCompleted}
        handleDeleteTodo={handleDeleteTodo}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearCompleted={handleClearCompleted}
        />

      </div>

    </div>
  )
}

export default App
