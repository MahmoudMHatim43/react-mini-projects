import "./App.css";
import React from 'react';
import { Counter } from "./components/Counter/Counter";

// the root app component
function App() {
	return (
		<div>
			<Counter />
		</div>
	);
}

// export the app root component to the index.js
export default App;
