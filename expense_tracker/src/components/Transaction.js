import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Transaction = ({ transaction }) => {
  const { deleteEl } = useContext(GlobalContext)

  const color = transaction.amount >= 0 ? 'plus' : 'minus'
  const sign = transaction.amount >= 0 ? '+' : '-'
  const amount = Math.abs(transaction.amount)

  return (
    <li className={color} key={transaction.id}>
      {transaction.text} <span>{sign}${amount}</span><button className="delete-btn" onClick={() => deleteEl(transaction.id)}>x</button>
    </li>
  )
}

export default Transaction
