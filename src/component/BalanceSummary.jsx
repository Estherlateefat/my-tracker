export default function BalanceSummary({ income, expenses }) {
  const balance = income - expenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow">
        <p className="text-gray-500">Balance</p>
        <p className="text-2xl font-bold">₦{balance}</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p className="text-gray-500">Income</p>
        <p className="text-2xl font-bold text-green-600">
          ₦{income}
        </p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p className="text-gray-500">Expenses</p>
        <p className="text-2xl font-bold text-red-600">
          ₦{expenses}
        </p>
      </div>
    </div>
  );
}