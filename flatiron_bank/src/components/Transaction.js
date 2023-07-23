import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });
