import React from 'react';
export function ToDoEl({ todo, dispatch }) {
    return (
        <div>
            <h4 style={{ color: todo.completed ? 'red' : 'black' }}>{todo.text}</h4>
            <button onClick={() => { dispatch({ type: 'toggle', payload: todo.id }) }}>Done</button>
            <button onClick={() => { dispatch({ type: 'delete', payload: todo.id }) }}>DELETE</button>
        </div>
    );
}