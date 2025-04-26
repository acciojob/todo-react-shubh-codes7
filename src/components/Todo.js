import React from 'react'

export default function Todo(){
    const [todo, setTodo] = React.useState('')
    const [todoarr, setTodoarr] = React.useState([])

    function handleAdd(e){
        setTodoarr((prev) => [todo, ...prev])
        setTodo('')
    }
    
    function handleDelete(idx){
        let filteredArr = todoarr.filter((todo, id) => id !== idx)
        setTodoarr(filteredArr)
    }

    return(
        <>
            <h2>To-Do List</h2>
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button onClick={handleAdd}>Add Todo</button>
            <div>
                {
                    todoarr.length > 0 && todoarr.map((todo, idx) => {
                        return(
                        <ul key={idx}>
                            <p>{todo}</p>
                            <button onClick={()=>handleDelete(idx)}>Delete</button>
                        </ul>)
                    })
                }
            </div>
        </>
    )
}