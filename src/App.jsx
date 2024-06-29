
import { useReducer,  } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import Todocontext from './components/context/Todocontext'
import TodoReducer from './components/Reducers/TodoReducer'

function App() {


  const [todos,dispatch]=useReducer(TodoReducer,[]);


  return (
    <Todocontext.Provider value = {{todos,dispatch}}>
    <AddTodo/>
    <TodoList/>
    </Todocontext.Provider>
  )
}

export default App;
