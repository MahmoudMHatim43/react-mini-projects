import { useReducer } from "react";
import "./Counter.css";

const Actions = { incr: 'incr', decr: 'decr' }

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
}
