import css from "./TransactionHistory.module.css";
function TransactionHistory({ items }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((transactions) => {
            return (
              <tr key={transactions.id}>
                <td>{transactions.type}</td>
                <td>{transactions.amount}</td>
                <td>{transactions.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TransactionHistory;
