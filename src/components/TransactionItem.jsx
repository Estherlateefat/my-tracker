export default function TransactionItem({ transaction, onDelete }) {
  return (
    <li className="flex flex-col md:flex-row justify-between items-start md:items-center border p-4 rounded bg-white shadow-sm">
      <div className="mb-2 md:mb-0">
        <p className="font-semibold text-gray-800">
          {transaction.category} – ₦{transaction.amount.toLocaleString("en-NG")}
        </p>
        <p className="text-sm text-gray-500">
          {transaction.date} {transaction.description && `| ${transaction.description}`}
        </p>
      </div>

      <button
        onClick={() => onDelete(transaction.id)}
        className="text-red-600 hover:text-red-800 self-end md:self-auto"
      >
        Delete
      </button>
    </li>
  );
}