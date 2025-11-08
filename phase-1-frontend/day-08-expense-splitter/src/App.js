import React, { useState } from 'react';
import PersonForm from './components/PersonForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import './styles/App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleAddPerson = (person) => {
    setPeople([...people, person]);
  };

  const handleRemovePerson = (id) => {
    setPeople(people.filter(p => p.id !== id));
    // Remove from expenses too
    setExpenses(expenses.map(exp => ({
      ...exp,
      splitAmong: exp.splitAmong.filter(pid => pid !== id)
    })).filter(exp => exp.paidBy !== id && exp.splitAmong.length > 0));
  };

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const handleReset = () => {
    if (window.confirm('Reset all data?')) {
      setPeople([]);
      setExpenses([]);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">💸 Expense Splitter</h1>
        <p className="subtitle">Split bills fairly among friends</p>
      </header>

      <div className="content">
        <section className="section">
          <h2 className="section-heading">People</h2>
          <PersonForm onAddPerson={handleAddPerson} />
          
          {people.length > 0 && (
            <div className="people-list">
              {people.map(person => (
                <div key={person.id} className="person-chip">
                  {person.name}
                  <button 
                    onClick={() => handleRemovePerson(person.id)}
                    className="chip-close"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {people.length >= 2 && (
          <section className="section">
            <h2 className="section-heading">Expenses</h2>
            <ExpenseForm 
              people={people} 
              onAddExpense={handleAddExpense} 
            />
            <ExpenseList 
              expenses={expenses}
              people={people}
              onDelete={handleDeleteExpense}
            />
          </section>
        )}

        {expenses.length > 0 && (
          <section className="section">
            <h2 className="section-heading">Summary</h2>
            <Summary people={people} expenses={expenses} />
          </section>
        )}

        {(people.length > 0 || expenses.length > 0) && (
          <button onClick={handleReset} className="btn-reset">
            Reset All
          </button>
        )}
      </div>
    </div>
  );
}

export default App;