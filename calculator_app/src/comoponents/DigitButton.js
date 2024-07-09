export function Digit({ dispatch, digit }) {
  return (
    <button className={digit !== '0' ? 'box' : 'box zero'} onClick={() => { dispatch({ type: 'add_number', payload: { digit } }) }}>
      {digit}
    </button>
  );
};