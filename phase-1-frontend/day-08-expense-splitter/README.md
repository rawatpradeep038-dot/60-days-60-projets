# Day 08 - Expense Splitter Calculator

## 🎯 Project Goal
Create a fair bill splitting calculator that helps friends divide expenses accurately.

## 🚀 Live Demo
**[View Live Demo](https://day-08-expense-splitter.vercel.app)**

## 🛠️ Tech Stack
- React 18 (useState)
- CSS3 (Minimal design)
- JavaScript ES6+

## ✨ Features
- ✅ Add multiple people
- ✅ Track who paid what
- ✅ Split expenses equally or custom
- ✅ Auto-calculate balances
- ✅ Settlement suggestions (who pays who)
- ✅ Clean, minimal UI
- ✅ Responsive design
- ✅ Delete expenses/people
- ✅ Real-time calculations

## 🧠 What I Learned
- Complex state management with multiple entities
- Financial calculations and algorithms
- Settlement optimization logic
- Form validation and user input handling
- Clean, minimal CSS design
- Checkbox group interactions
- Dynamic form fields based on data

## 🎨 Design Choices
- Subtle color palette (grays, soft purple)
- Minimal shadows and borders
- Clean typography
- Card-based layout
- Responsive grid system
- Clear visual hierarchy

## 🏃‍♂️ Run Locally
\`\`\`bash
npm install
npm start
\`\`\`

## 📁 File Structure
\`\`\`
src/
├── App.js
├── components/
│   ├── PersonForm.js
│   ├── ExpenseForm.js
│   ├── ExpenseList.js
│   └── Summary.js
├── utils/
│   └── calculations.js
└── styles/
    └── App.css
\`\`\`

## 💡 Key Features Explained

### Balance Calculation
Calculates net balance for each person:
- Who paid more than their share (creditor)
- Who owes money (debtor)

### Settlement Algorithm
Minimizes number of transactions:
- Matches biggest debtor with biggest creditor
- Continues until all balanced
- Optimizes payment flow

## 🐛 Challenges Faced
1. Settlement algorithm complexity
2. Handling edge cases (person removal)
3. Form validation for split selection
4. Real-time balance updates

## 💡 Key Code Snippet

\`\`\`javascript
// Calculate balances
expenses.forEach(expense => {
  const perPerson = expense.amount / expense.splitAmong.length;
  
  balances[expense.paidBy].balance += expense.amount;
  
  expense.splitAmong.forEach(personId => {
    balances[personId].balance -= perPerson;
  });
});
\`\`\`

## ✅ Status
**Completed on:** November 9, 2025  
**Time Spent:** ~5 hours  
**Day 08/60** of #60Days60Projects

## 🔜 Future Enhancements
- [ ] Unequal splits (custom percentages)
- [ ] Currency conversion
- [ ] Export to PDF
- [ ] Split by items (itemized bills)
- [ ] Tax and tip calculation

---

**Built with ❤️ and math**