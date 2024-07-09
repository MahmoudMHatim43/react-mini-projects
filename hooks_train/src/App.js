import "./App.css";
import React from 'react';
import { Counter } from "./components/Counter";
import { ToDo } from './components/ToDo';
// the root app component
function App() {
	return (
		<div>
			<ToDo />
		</div>
	);
}

// export the app root component to the index.js
export default App;
