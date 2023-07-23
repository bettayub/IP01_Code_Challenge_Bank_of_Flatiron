import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';
import axios from 'axios';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch transactions from JSON server using axios
    axios.get('http://localhost:3000/transactions')
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  const addTransaction = (newTransaction) => {
    const newId = transactions.length + 1;
    const updatedTransactions = [...transactions, { id: newId, ...newTransaction }];
    setTransactions(updatedTransactions);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Bank of Flatiron</h1>
      <div className="search-container">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="form-container">
        <TransactionForm addTransaction={addTransaction} />
      </div>
      <TransactionTable transactions={filteredTransactions} onDeleteTransaction={deleteTransaction} />
    </div>
  );
};


export default App;



