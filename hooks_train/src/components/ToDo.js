import React from 'react';
import { useReducer, useState } from 'react';
import { ToDoEl } from './ToDoEl';
import './ToDo.css';

export function ToDo() {
    const [todoList, dispatch] = useReducer(reducer, []);
    const [text, setText] = useState('');

    const change = (event) => { setText(event.target.value); };
    const submit = (event) => {
        event.preventDefault(); // prevent page refresh
        dispatch({ type: 'add_to_do', payload: { newText: text } }); // update todoList
        setText(''); // empty the box to get ready to add a new text
    };
    return (
        <div>
            <div>
                <form onSubmit={submit}>
                    <input type="text" value={text} onChange={change} />
                </form>
            </div>
            <div>
                {todoList.map(todo => {
                    console.log(todo);
                    return <ToDoEl todo={todo} key={todo.id} dispatch={dispatch} />;
                })}
            </div>
        </div>
    );
};

function reducer(todoList, action) {
    switch (action.type) {
        case 'add_to_do':
            return [...todoList, // throught all the todoList...
            { text: action.payload.newText, id: Date.now(), completed: false }]; // ... add a new element to the end
        case 'toggle':
            return todoList.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        case 'delete':
            return todoList.filter(todo => todo.id !== action.payload);
        default:
            return todoList;
    };
};