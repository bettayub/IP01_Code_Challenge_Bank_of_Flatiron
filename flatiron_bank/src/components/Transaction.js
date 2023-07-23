import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(formData);
    setFormData({ date: '', description: '', category: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <br />
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Add Transaction</button>
    </form>
  );
};


