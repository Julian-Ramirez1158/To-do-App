import React from 'react'
import checkCircle from './check-circle-regular.svg'


const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <img src={checkCircle} onClick={() => {deleteTodo(todo.id)}} alt="Check packed item" className="check-item"></img>
                </div>
            )
        })
    ) : (
        <p className="center collection-item">You have nothing left to pack, yay!</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos