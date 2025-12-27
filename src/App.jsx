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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
<div><strong>STUDENT DETAILS</strong>
    <p><strong>NAME:</strong>SUARA LATEEFAT ESTHER</p>
    <p><strong>DEPARTMENT:</strong>FRONTEND DEVELOPMENT</p>
    <p><strong>MATRIC N0:</strong>JAD/TA/25A/FD/001</p>
    <p><strong>FINAL PROJECT</strong></p>
</div>


        <h1 className="text-3xl font-bold text-center mb-6">
          Personal Finance Tracker
        </h1>

        <BalanceSummary
          income={income}
          expenses={expenses}
        />

        <TransactionForm onAdd={addTransaction} />

        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
        />
      </div>
    </div>
  );
}
