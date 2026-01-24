import TransactionItem from "./TransactionItem";

export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className="rounded shadow bg-white">
      <h2 className="text-xl font-semibold mb-4 px-4 py-3 border-b">
        Transactions
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500 px-4 py-3">No transactions yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {[...transactions]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                onDelete={onDelete}
              />
            ))}
        </ul>
      )}
    </div>
  );
}