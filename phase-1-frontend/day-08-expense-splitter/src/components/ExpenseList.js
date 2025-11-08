import React from 'react';

function ExpenseList({ expenses, people, onDelete }) {
  const getPersonName = (id) => {
    const person = people.find(p => p.id === id);
    return person ? person.name : 'Unknown';
  };

  if (expenses.length === 0) {
    return <div className="empty">No expenses added yet</div>;
  }

  return (
    <div className="list">
      {expenses.map(expense => (
        <div key={expense.id} className="expense-item">
          <div className="expense-info">
            <div className="expense-desc">{expense.description}</div>
            <div className="expense-meta">
              ${expense.amount.toFixed(2)} paid by {getPersonName(expense.paidBy)}
              <br />
              Split: {expense.splitAmong.map(getPersonName).join(', ')}
            </div>
          </div>
          <button 
            onClick={() => onDelete(expense.id)}
            className="btn-delete"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;