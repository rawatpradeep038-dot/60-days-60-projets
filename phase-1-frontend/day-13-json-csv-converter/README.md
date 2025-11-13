# Day 13 - JSON to CSV Converter

## 🎯 Project Goal
Build a user-friendly JSON to CSV converter with file upload, text input, preview table, and export functionality using glassmorphism design and smooth animations.

## 🚀 Live Demo
**[View Live Demo](https://day-13-json-csv-converter.vercel.app)**

## 🛠️ Tech Stack
- React 18 (Vite)
- PapaParse (CSV parsing library)
- CSS3 (Glassmorphism, Animations)
- JavaScript ES6+

## ✨ Features
- ✅ Upload JSON files (.json)
- ✅ Paste JSON text directly
- ✅ Load sample data
- ✅ Automatic JSON parsing and validation
- ✅ Flatten nested objects
- ✅ Preview data in table format
- ✅ Convert to CSV format
- ✅ Copy CSV to clipboard
- ✅ Download as CSV file
- ✅ Error handling with animations
- ✅ Glassmorphism design
- ✅ Smooth animations
- ✅ Responsive design

## 🧠 What I Learned
- File upload and FileReader API
- JSON parsing and validation
- Data transformation (flattening nested objects)
- CSV generation with PapaParse
- Blob creation and download
- Clipboard API
- Complex error handling
- Table rendering with dynamic data
- Advanced CSS animations
- Glassmorphism effects

## 🎨 Design Highlights
- **Glassmorphism**: Frosted glass with backdrop-filter
- **Smooth Animations**:
  - fadeIn: Card entrance
  - slideDown: Title animation
  - shake: Error message
  - slideUp: Info box reveal
  - zoomIn: Table appearance
  - fadeInUp: Actions section
  - codeReveal: CSV code reveal
- **Hover Effects**: Scale, lift, shadow on buttons and table rows
- **Light Gradient Theme**: Warm peach to orange
- **Modern UI**: Clean, intuitive, professional

## 🏃‍♂️ Run Locally
\`\`\`bash
npm install
npm run dev
\`\`\`

## 📁 File Structure
\`\`\`
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── FileUpload.jsx
│   ├── TextInput.jsx
│   ├── DataTable.jsx
│   └── Actions.jsx
├── utils/
│   └── converter.js
└── styles/
    ├── index.css
    └── App.css
\`\`\`

## 💡 Key Features Explained

### JSON Parsing
\`\`\`javascript
export const parseJSON = (jsonString) => {
  const parsed = JSON.parse(jsonString);
  return Array.isArray(parsed) ? parsed : [parsed];
};
\`\`\`

### Flatten Nested Objects
\`\`\`javascript
export const flattenObject = (obj, prefix = '') => {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = prefix ? \`\${prefix}.\${key}\` : key;
    
    if (typeof value === 'object' && value !== null) {
      Object.assign(acc, flattenObject(value, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
};
\`\`\`

### CSV Conversion with PapaParse
\`\`\`javascript
import Papa from 'papaparse';

const csv = Papa.unparse(jsonData);
\`\`\`

### Download Functionality
\`\`\`javascript
const blob = new Blob([csvData], { type: 'text/csv' });
const url = URL.createObjectURL(blob);
const link = document.createElement('a');
link.download = 'data.csv';
link.href = url;
link.click();
\`\`\`

## 🐛 Challenges Faced
1. Handling nested JSON objects (flattening algorithm)
2. Dynamic table rendering with varying columns
3. File upload and text input dual functionality
4. Error handling for invalid JSON
5. Creating smooth animation sequences

## 🎨 Animation Techniques Used
- **fadeIn**: Opacity 0→1 with translateY
- **slideDown**: Transform translateY(-20px)→0
- **shake**: Horizontal oscillation for errors
- **slideUp**: Bottom-to-top reveal
- **zoomIn**: Scale 0.95→1
- **fadeInUp**: Combined fade and upward motion
- **codeReveal**: Height expansion animation
- **Hover transforms**: Scale and translateY combinations
- **Smooth transitions**: All with cubic-bezier easing

## ✅ Status
**Completed on:** November 13, 2025  
**Time Spent:** ~5 hours  
**Built with:** Vite + React + PapaParse  
**Day 13/60** of #60Days60Projects

## 🔜 Future Enhancements
- [ ] CSV to JSON conversion (reverse)
- [ ] Support for Excel files (.xlsx)
- [ ] Custom delimiter options
- [ ] Column selection/filtering
- [ ] Data validation rules
- [ ] Batch file processing
- [ ] Dark mode toggle

---

**Built with ❤️ and data transformation magic 📊**