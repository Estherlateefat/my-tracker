










// function App() {
//   return (
//     <div className="min-h-screen bg-purple-600 p-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-white mb-6">
//           💰 Finance Tracker
//         </h1>

//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div className="bg-white text-purple-700 p-4 rounded-xl shadow">
//             <p className="text-sm">Income</p>
//             <h2 className="text-2xl font-bold">₦0</h2>
//           </div>

//           <div className="bg-white text-purple-700 p-4 rounded-xl shadow">
//             <p className="text-sm">Expenses</p>
//             <h2 className="text-2xl font-bold">₦0</h2>
//           </div>

//           <div className="bg-white text-purple-700 p-4 rounded-xl shadow">
//             <p className="text-sm">Balance</p>
//             <h2 className="text-2xl font-bold">₦0</h2>
//           </div>
//         </div>

//         {/* Add Transaction */}
//         <div className="bg-white p-6 rounded-xl shadow mb-6">
//           <h2 className="text-xl font-semibold mb-4 text-purple-700">
//             Add Transaction
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <input
//               type="text"
//               placeholder="Description"
//               className="border rounded-lg p-2"
//             />

//             <input
//               type="number"
//               placeholder="Amount"
//               className="border rounded-lg p-2"
//             />

//             <button className="bg-purple-600 text-white rounded-lg px-4 py-2 font-semibold">
//               Add
//             </button>
//           </div>
//         </div>

//         {/* Transactions */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4 text-purple-700">
//             Transactions
//           </h2>

//           <p className="text-gray-500">No transactions yet</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App







































//  import { useEffect, useState } from "react";
//  import BalanceSummary from "./component/BalanceSummary";
//  import TransactionForm from "./component/TransactionForm";
// import TransactionList from "./component/TransactionList";
// function App() {
//   return (
//     <div className="min-h-screen bg-purple-600 p-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-white mb-6">
//           💰 Finance Tracker
//         </h1>

//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div className="bg-white text-purple-700 p-4 rounded-xl shadow">
//             <p className="text-sm">Income</p>
//             <h2 className="text-2xl font-bold">₦0</h2>
//           </div>

//           <div className="bg-white text-purple-700 p-4 rounded-xl shadow">
//             <p className="text-sm">Expenses</p>
//             <h2 className="text-2xl font-bold">₦0</h2>
//           </div>

//           <div className="bg-white text-purple-700 p-4 rounded-xl shadow">
//             <p className="text-sm">Balance</p>
//             <h2 className="text-2xl font-bold">₦0</h2>
//           </div>
//         </div>

//         {/* Add Transaction */}
//         <div className="bg-white p-6 rounded-xl shadow mb-6">
//           <h2 className="text-xl font-semibold mb-4 text-purple-700">
//             Add Transaction
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <input
//               type="text"
//               placeholder="Description"
//               className="border rounded-lg p-2"
//             />

//             <input
//               type="number"
//               placeholder="Amount"
//               className="border rounded-lg p-2"
//             />

//             <button className="bg-purple-600 text-white rounded-lg px-4 py-2 font-semibold">
//               Add
//             </button>
//           </div>
//         </div>

//         {/* Transactions */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4 text-purple-700">
//             Transactions
//           </h2>

//           <p className="text-gray-500">No transactions yet</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App


 import { useEffect, useState } from "react";
 import BalanceSummary from "./component/BalanceSummary";
 import TransactionForm from "./component/TransactionForm";
import TransactionList from "./component/TransactionList";




export default function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 to-purple-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          💰 Personal Finance Tracker
        </h1>

        {/* Balance Summary */}
        <BalanceSummary income={income} expenses={expenses} />

        {/* Transaction Form */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <TransactionForm onAdd={addTransaction} />
        </div>

        {/* Transaction List */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <TransactionList
            transactions={transactions}
            onDelete={deleteTransaction}
          />
        </div>

      </div>
    </div>
  );
}