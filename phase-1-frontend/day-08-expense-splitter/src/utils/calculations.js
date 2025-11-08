// ============================================
// EXPENSE CALCULATION UTILITIES
// ============================================

/**
 * Calculate how much each person owes or is owed
 * @param {Array} people - Array of person objects
 * @param {Array} expenses - Array of expense objects
 * @returns {Object} Balance for each person
 */
export const calculateBalances = (people, expenses) => {
  const balances = {};
  
  // Initialize balances for all people
  people.forEach(person => {
    balances[person.id] = { 
      name: person.name, 
      balance: 0 
    };
  });
  
  // Calculate from expenses
  expenses.forEach(expense => {
    const totalAmount = parseFloat(expense.amount);
    const splitCount = expense.splitAmong.length;
    const perPerson = totalAmount / splitCount;
    
    // Person who paid gets credited the full amount
    if (balances[expense.paidBy]) {
      balances[expense.paidBy].balance += totalAmount;
    }
    
    // Each person in the split gets debited their share
    expense.splitAmong.forEach(personId => {
      if (balances[personId]) {
        balances[personId].balance -= perPerson;
      }
    });
  });
  
  return balances;
};

/**
 * Generate settlement suggestions (who should pay who)
 * @param {Object} balances - Balance object from calculateBalances
 * @returns {Array} Array of settlement suggestions
 */
export const calculateSettlements = (balances) => {
  const settlements = [];
  const debtors = [];
  const creditors = [];
  
  // Separate people who owe money (debtors) and people who are owed (creditors)
  Object.entries(balances).forEach(([id, data]) => {
    if (data.balance < -0.01) {
      // Person owes money (negative balance)
      debtors.push({ 
        id, 
        name: data.name, 
        amount: Math.abs(data.balance) 
      });
    } else if (data.balance > 0.01) {
      // Person is owed money (positive balance)
      creditors.push({ 
        id, 
        name: data.name, 
        amount: data.balance 
      });
    }
  });
  
  // Sort by amount (largest first)
  debtors.sort((a, b) => b.amount - a.amount);
  creditors.sort((a, b) => b.amount - a.amount);
  
  // Match debtors with creditors to minimize transactions
  let i = 0; // debtor index
  let j = 0; // creditor index
  
  while (i < debtors.length && j < creditors.length) {
    const debtAmount = debtors[i].amount;
    const creditAmount = creditors[j].amount;
    const settlementAmount = Math.min(debtAmount, creditAmount);
    
    // Create settlement instruction
    settlements.push({
      from: debtors[i].name,
      to: creditors[j].name,
      amount: settlementAmount
    });
    
    // Update remaining amounts
    debtors[i].amount -= settlementAmount;
    creditors[j].amount -= settlementAmount;
    
    // Move to next person if current one is settled
    if (debtors[i].amount < 0.01) i++;
    if (creditors[j].amount < 0.01) j++;
  }
  
  return settlements;
};