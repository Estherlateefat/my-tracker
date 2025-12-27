import { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({
    type: "income",
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.amount || !form.category || !form.date) return;

    onAdd({
      ...form,
      id: Date.now(),
      amount: Number(form.amount),
    });

    setForm({
      type: "income",
      amount: "",
      category: "",
      date: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white p-6 rounded shadow mb-6"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="description"
          placeholder="Description (optional)"
          value={form.description}
          onChange={handleChange}
          className="border p-2 rounded md:col-span-2"
        />
      </div>

      <button className="mt-4 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Add Transaction
      </button>
    </form>
  );
}