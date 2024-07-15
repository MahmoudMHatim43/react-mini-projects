import "./App.css";
import { useReducer } from "react";
import { Digit } from "./comoponents/DigitButton";
import { Operation } from "./comoponents/OperationButton";

function App() {
  const [{ currOp, prevOp, operation }, dispatch] = useReducer(reducer, { currOp: "", prevOp: "", operation: "" });

  return (
    <div className="calculator-container">
      <div className="output">
        <div className="prev">
          {prevOp} {operation}
        </div>
        <div className="curr">{currOp}</div>
      </div>
      <div className="buttons-container">
        <Operation operation={"AC"} dispatch={dispatch} />
        <Operation operation={"+/-"} dispatch={dispatch} />
        <Operation operation={"%"} dispatch={dispatch} />
        <Operation operation={"/"} dispatch={dispatch} />
        <Digit digit={"7"} dispatch={dispatch} />
        <Digit digit={"8"} dispatch={dispatch} />
        <Digit digit={"9"} dispatch={dispatch} />
        <Operation operation={"*"} dispatch={dispatch} />
        <Digit digit={"4"} dispatch={dispatch} />
        <Digit digit={"5"} dispatch={dispatch} />
        <Digit digit={"6"} dispatch={dispatch} />
        <Operation operation={"-"} dispatch={dispatch} />
        <Digit digit={"1"} dispatch={dispatch} />
        <Digit digit={"2"} dispatch={dispatch} />
        <Digit digit={"3"} dispatch={dispatch} />
        <Operation operation={"+"} dispatch={dispatch} />
        <Digit digit={"0"} dispatch={dispatch} />
        <Digit digit={"."} dispatch={dispatch} />
        <Operation operation={"="} dispatch={dispatch} />
      </div>
    </div>
  );
}

// reducer function:
function reducer(state, { type, payload }) {
  switch (type) {
    case "add_number":
      if (state.overwrite) {
        return { ...state, currOp: payload.digit, overwrite: false };
      }
      if (state.currOp == "0" && payload.digit == "0") return state;
      if (state.currOp.includes(".") && payload.digit == ".") return state;
      if (state.currOp == "0" && payload.digit !== ".")
        return {
          ...state,
          currOp: payload.digit,
        };
      return {
        ...state,
        currOp: `${state.currOp || ""}${payload.digit}`,
      };
    case "erase":
      return {
        ...state,
        currOp: "",
        prevOp: "",
        operation: "",
      };
    case "choose":
      if (state.currOp == "" && state.prevOp == "") return state;
      if (state.prevOp == "" && state.currOp !== "")
        return {
          ...state,
          prevOp: state.currOp,
          operation: payload.operation,
          currOp: "",
        };
      return {
        ...state,
        prevOp: evaluate(state),
        operation: payload.operation,
        currOp: "",
      };
    case "change_sign":
      return {
        ...state,
        prevOp: "",
        operation: "",
        currOp: `-${state.currOp}`,
      };
    case "evaluate":
      if (state.currOp == "" || state.operation == "" || state.prevOp == "") return state;
      return {
        ...state,
        currOp: evaluate(state),
        operation: "",
        prevOp: "",
        overwrite: true,
      };
  }
}
// evaluate function:
function evaluate(state) {
  const prev = parseFloat(state.prevOp);
  const curr = parseFloat(state.currOp);

  if (isNaN(prev) || isNaN(curr)) return "";
  let result = "";
  switch (state.operation) {
    case "+":
      return (result = prev + curr);
    case "-":
      return (result = prev - curr);
    case "*":
      return (result = prev * curr);
    case "/":
      return (result = prev / curr);
    case "%":
      return (result = prev % curr);
  }
  console.log(result);
  return result.toString();
}
export default App;
