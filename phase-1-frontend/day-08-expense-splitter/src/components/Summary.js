import React from 'react';
import { calculateBalances, calculateSettlements } from '../utils/calculations';

function Summary({ people, expenses }) {
  if (people.length === 0 || expenses.length === 0) {
    return null;
  }

  const balances = calculateBalances(people, expenses);
  const settlements = calculateSettlements(balances);
  
  const totalExpense = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="summary">
      <div className="summary-card">
        <div className="summary-title">Total Expense</div>
        <div className="summary-amount">${totalExpense.toFixed(2)}</div>
      </div>

      <div className="balances-section">
        <h3 className="section-title">Balances</h3>
        {Object.entries(balances).map(([id, data]) => (
          <div key={id} className="balance-item">
            <span className="balance-name">{data.name}</span>
            <span className={`balance-amount ${data.balance >= 0 ? 'positive' : 'negative'}`}>
              {data.balance >= 0 ? '+' : ''}{data.balance.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {settlements.length > 0 && (
        <div className="settlements-section">
          <h3 className="section-title">Settlements</h3>
          {settlements.map((settlement, index) => (
            <div key={index} className="settlement-item">
              <strong>{settlement.from}</strong> pays <strong>{settlement.to}</strong>
              <span className="settlement-amount">${settlement.amount.toFixed(2)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summary;