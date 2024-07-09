export function Operation({ dispatch, operation }) {
  return (
    <button
      className={operation !== 'AC' ? 'box tool' : 'box erase'}
      onClick={() => { dispatch({ type: operation === 'AC' ? 'erase' : 'choose', payload: { operation } }) }}
    >
      {operation == '/' ? '÷' : operation == '*' ? 'x' : operation}
    </button>
  );
};