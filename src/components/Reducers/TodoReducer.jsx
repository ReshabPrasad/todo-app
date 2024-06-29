function TodoReducer(state,action){
    if(action.type=='add_todo'){
        let nextid=state.length+1;
        const newTodo = [...state,{id:nextid,text:action.payload.todotext,isFinished:false}];
        return newTodo;
    }else if(action.type=='edit_todo'){
        const newtodolist = state.map((todo)=> {
            if(todo.id==action.payload.id){
                todo.text=action.payload.id;
            }
            return todo;
        })
        return newtodolist;
    }else if(action.type=='finish_todo'){
        const newtodolist = state.map((todo)=> {
            if(todo.id==action.payload.id){
                todo.isFinished=action.payload.state;
            }
            return todo;
        })
        return newtodolist;
    }else if(action.type=='delete_todo'){
        const newtodolist = state.filter((todo)=>todo.id!=action.payload.id);
        return newtodolist;
    }
    return state;
}

export default TodoReducer;