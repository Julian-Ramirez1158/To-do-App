import React from 'react'
import checkCircle from './check-circle-regular.svg'


const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span className="list-item" >{todo.content}</span>
                    <img src={checkCircle} onClick={() => {deleteTodo(todo.id)}} alt="Check packed item" className="check-icon"></img>
                </div>
            )
        })
    ) : (
        <div className="collection-item complete">
            <span id="complete" className="list-item">You have nothing left to pack, yay!</span>
        </div>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos