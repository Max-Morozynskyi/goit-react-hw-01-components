import PropTypes from "prop-types";
import "./TransactionHistory.css";

// [
//   {
//     "id": "1e0700a2-5183-4291-85cc-2065a036a683",
//     "type": "invoice",
//     "amount": "964.82",
//     "currency": "LRD"
//   },

export function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map(({ id, type, amount, currency }) => 
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)}
  </tbody>
</table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}