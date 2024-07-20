import css from "./TransactionHistory.module.css";
function TransactionHistory({ items }) {
  return (
    <div>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((transactions) => {
            return (
              <tr className={css.tableRow} key={transactions.id}>
                <td className={css.tableData}>{transactions.type}</td>
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
