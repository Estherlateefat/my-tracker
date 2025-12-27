import TransactionItem from "./TransactionItem";

export default function TransactionList({
  transactions,
  onDelete,
}) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">
        Transactions
      </h2>

      {transactions.length === 0 && (
        <p className="text-gray-500">
          No transactions yet.
        </p>
      )}

      <ul className="space-y-3">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}