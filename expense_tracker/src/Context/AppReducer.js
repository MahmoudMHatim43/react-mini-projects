export default function AppReducer(state, { type, payload }) {
  switch (type) {
    case 'delete':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id != payload)
      }
    case 'add':
      return {
        ...state,
        transactions: [payload, ...state.transactions]
      }
    default:
      return state
  }
}