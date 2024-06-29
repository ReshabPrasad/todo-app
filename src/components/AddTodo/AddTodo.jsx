import { useContext, useState } from "react";
import Todocontext from "../context/Todocontext";

function AddTodo(){
    const {dispatch}=useContext(Todocontext);
    const [todotext,settodotext] =useState('');
    function addtodo(todotext){
        dispatch({type:'add_todo',payload : {todotext}})
    }
    return <>
    <input type="text" placeholder="Add Todo....." onChange={(e)=> settodotext(e.target.value)} value={todotext}></input>
    <button onClick = {()=>{
        addtodo(todotext)
        settodotext('');
    }}>Submit</button>
    </>
}

export default AddTodo;