import { useState } from "react";

function Todo ({finishtodo,editTodo,text,isFinished,ondeletetodo}){

    const [isediting,setisediting]=useState(false);
    const [todotext,settodotext]=useState(text);
    return (
        <div>
            <input type="checkbox" checked={isFinished} onChange={()=>finishtodo(!isFinished)}/>
            {isediting? <input value ={todotext} onChange ={(e)=> settodotext(e.target.value)}/> : <span>{todotext}</span>}
            <button onClick={() => {
                setisediting(!isediting);
                editTodo(todotext);
            }}>{(isediting) ? 'Save' : 'Edit'}</button>
            <button onClick={ondeletetodo}>Delete</button>
        </div>
    )
}

export default Todo;