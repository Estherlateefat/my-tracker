import { useState, useEffect } from "react";
import BalanceSummary from "./components/BalanceSummary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

export default function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  // Save transactions to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Add a transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // Calculate totals
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Personal Finance Tracker
        </h1>

        {/* Balance Summary */}
        <BalanceSummary income={income} expenses={expenses} />

        {/* Transaction Form */}
        <TransactionForm onAdd={addTransaction} />

        {/* Transaction List */}
        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
        />

      </div>
    </div>
  );
}