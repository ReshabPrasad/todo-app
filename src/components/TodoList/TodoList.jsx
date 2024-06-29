import { useContext } from "react";
import Todo from "../Todo/Todo";
import Todocontext from "../context/Todocontext";

function TodoList(){

    const {todos,dispatch}=useContext(Todocontext)
    function deleteTodo(id){
        dispatch({type:'delete_todo',payload : {id}});
    }

    function editTodo(id,newTodo){
        dispatch({type:'edit_todo', payload:{id,newTodo}});
    }
    function finishtodo(id,state){
        dispatch({type:'finish_todo',payload:{id,state}});
    }
    return (
        todos && todos.map((todo)=> <Todo text={todo.text} 
        id = {todo.id } 
        key = {todo.id} 
        isFinished={todo.isFinished}
        ondeletetodo= {()=>deleteTodo(todo.id)}
        editTodo={(newTodo)=>editTodo(todo.id,newTodo)}
        finishtodo={(state)=>finishtodo(todo.id,state)}
    />)
    )
}

export default TodoList;