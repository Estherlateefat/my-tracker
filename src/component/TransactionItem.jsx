export default function TransactionItem({
  transaction,
  onDelete,
}) {
  return (
    <li className="flex justify-between items-center border p-3 rounded">
      <div>
        <p className="font-semibold">
          {transaction.category} – ₦{transaction.amount}
        </p>
        <p className="text-sm text-gray-500">
          {transaction.date} | {transaction.description}
        </p>
      </div>

      <button
        onClick={() => onDelete(transaction.id)}
        className="text-red-600 hover:text-red-800"
      >
        Delete
      </button>
    </li>
  );
}