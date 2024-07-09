export function Operation({ dispatch, operation }) {
  return (
    <button
      className={operation !== 'AC' ? 'box tool' : 'box erase'}
      onClick={() => {
        dispatch({
          type:
            operation === 'AC' ? 'erase' : operation === '=' ? 'evaluate' : operation === '+/-' ? 'change_sign' : 'choose',
          payload: { operation }
        })
      }}
    >
      {operation == '/' ? '÷' : operation == '*' ? 'x' : operation}
    </button>
  );
};