import "./App.css";
function App() {
	return (
		<div className="calculator-container">
			<div className="output">
				<div className="prev">123,000,450</div>
				<div className="curr">45 + 12 + 9 * 3</div>
			</div>
			<div className="buttons-container">
				<button className="box erase">AC</button>
				<button className="box tool">+/-</button>
				<button className="box tool">%</button>
				<button className="box tool">÷</button>
				<button className="box">7</button>
				<button className="box">8</button>
				<button className="box">9</button>
				<button className="box tool">x</button>
				<button className="box">4</button>
				<button className="box">5</button>
				<button className="box">6</button>
				<button className="box tool">-</button>
				<button className="box">1</button>
				<button className="box">2</button>
				<button className="box">3</button>
				<button className="box tool">+</button>
				<button className="box zero">0</button>
				<button className="box">.</button>
				<button className="box tool">=</button>
			</div>
		</div>
	);
}

export default App;
