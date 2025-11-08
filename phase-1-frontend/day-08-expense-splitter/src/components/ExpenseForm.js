import React, { useState } from 'react';

function ExpenseForm({ people, onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [splitAmong, setSplitAmong] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!description.trim() || !amount || !paidBy || splitAmong.length === 0) {
      alert('Please fill all fields');
      return;
    }
    
    onAddExpense({
      id: Date.now().toString(),
      description: description.trim(),
      amount: parseFloat(amount),
      paidBy,
      splitAmong
    });
    
    setDescription('');
    setAmount('');
    setPaidBy('');
    setSplitAmong([]);
  };

  const handleTogglePerson = (personId) => {
    setSplitAmong(prev => 
      prev.includes(personId)
        ? prev.filter(id => id !== personId)
        : [...prev, personId]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Expense description..."
        className="input"
        maxLength={30}
      />
      
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="input"
        step="0.01"
        min="0"
      />
      
      <select
        value={paidBy}
        onChange={(e) => setPaidBy(e.target.value)}
        className="select"
      >
        <option value="">Who paid?</option>
        {people.map(person => (
          <option key={person.id} value={person.id}>
            {person.name}
          </option>
        ))}
      </select>
      
      <div className="split-section">
        <label className="label">Split among:</label>
        <div className="checkbox-group">
          {people.map(person => (
            <label key={person.id} className="checkbox-label">
              <input
                type="checkbox"
                checked={splitAmong.includes(person.id)}
                onChange={() => handleTogglePerson(person.id)}
              />
              {person.name}
            </label>
          ))}
        </div>
      </div>
      
      <button type="submit" className="btn-primary">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;