import { useReducer, useState } from "react";
import "./Counter.css";

// using useReducer:

/* const Actions = { incr: 'incr', decr: 'decr' }

export function Counter() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	const incr = () => { dispatch({ type: Actions.incr }); };
	const decr = () => { dispatch({ type: Actions.decr }); };
	return (
		<div>
			<button onClick={decr}>-</button>
			<h1>{state.count}</h1>
			<button onClick={incr}>+</button>
		</div>
	);
}

function reducer(state, action) {
	switch (action.type) {
		case Actions.incr:
			return { count: state.count + 1 };
		case Actions.decr:
			return { count: state.count - 1 };
		default:
			return state;
	}
} */

// using UseState:

export function Counter() {
	// const [state,setState] = useState(initial state)
	const [count, setCount] = useState(1)

	return (
		<div>
			<h2>{count}</h2>
			<button onClick={() => setCount(prevCount => prevCount * 2)}>n*2</button>
			<button onClick={() => setCount(prevCount => prevCount / 2)}>n/2</button>
		</div>
	)
}

// practice:

/* export function ToogleTextVisibility() {
	const [state, setState] = useState('show')

	return (
		<>
			<h1 style={state === 'show' ? { visibility: 'hidden' } : { visibility: 'visible' }}>
				This Text Can Show and Hide
			</h1>

			<button onClick={() => { state === 'hide' ? setState('show') : setState('hide') }}>
				{state} the text
			</button >
		</>
	)
} */

/* export function Form() {
	const [text, setText] = useState('')
	const [submitted, setSubmitted] = useState('')
	return (
		<div>
			<h1>{submitted}</h1>
			<form onClick={(e) => {
				e.preventDefault() // prevent refresh
				setSubmitted(text)
			}}>
				<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
				<button onClick={() => { setSubmitted(text) }}>Submit</button>
			</form>
		</div>
	)
} */

/* export function ChangeColor() {
	const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 1)');

	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	const opacity = Math.random()

	return (
		<div style={{ backgroundColor: bgColor, transition: `all 0.5s ease` }}>
			<h1>Button Click = Change Color</h1>
			<button onClick={() => { setBgColor(`rgba(${red}, ${green}, ${blue}, ${opacity})`) }} style={{ cursor: 'pointer' }}>Click Me! 🤯</button>
		</div>
	)
}
// rgba(255,255,255,0,6) | from 255 to 0 => Math.floor(Math.random()*256) | from 0 to 1 => Math.random() */

/* export function ListItems() {
	const [input, setInput] = useState('') // used to add input to the items array and then reset the input value
	const [items, setItems] = useState([]) // create an items array
	const [id, setNextId] = useState(1) // give every item and itemEl an iD:

	const handleDelete = (id) => {
		// filter the items array removing the element with an iD that matches the iD provided in the function argument
		setItems(items.filter(item => item.itemId !== id))
	}

	return (
		<>
			<form onSubmit={(event) => {
				event.preventDefault() // prevent page refresh after form submit
				setInput('') // after submit reset the input value to '' to reuse it again the next time
			}}>
				<input type="text" value={input} onChange={(event) => { setInput(event.target.value) }} />
				<button onClick={() => {
					setItems([...items, { itemName: input, itemId: id }])
					setNextId(id + 1);
				}}>Add+</button>
			</form>
			<div>
				{items.map(item => <li key={item.itemId}>{item.itemName}<button onClick={() => { handleDelete(item.itemId) }}>Remove</button></li>)}
			</div>
		</>
	)
} */

