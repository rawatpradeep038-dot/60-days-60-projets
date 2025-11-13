import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import TextInput from './components/TextInput';
import DataTable from './components/DataTable';
import Actions from './components/Actions';
import { parseJSON, jsonToCSV, getHeaders, flattenData } from './utils/converter';
import './styles/App.css';

function App() {
  const [jsonData, setJsonData] = useState(null);
  const [csvData, setCsvData] = useState('');
  const [headers, setHeaders] = useState([]);
  const [error, setError] = useState('');

  const processJSON = (jsonString) => {
    try {
      setError('');
      
      // Parse JSON
      const parsed = parseJSON(jsonString);
      
      // Flatten nested objects
      const flattened = flattenData(parsed);
      
      // Get headers
      const cols = getHeaders(flattened);
      
      // Convert to CSV
      const csv = jsonToCSV(flattened);
      
      setJsonData(flattened);
      setHeaders(cols);
      setCsvData(csv);
    } catch (err) {
      setError(err.message);
      setJsonData(null);
      setCsvData('');
      setHeaders([]);
    }
  };

  const handleReset = () => {
    setJsonData(null);
    setCsvData('');
    setHeaders([]);
    setError('');
  };

  return (
    <div className="container">
      <div className="card">
        <header className="header">
          <h1 className="title">🔄 JSON to CSV Converter</h1>
          <p className="subtitle">Convert your JSON data to CSV format instantly</p>
        </header>

        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        {!jsonData ? (
          <>
            <FileUpload onFileLoad={processJSON} />
            
            <div className="divider">
              <span>OR</span>
            </div>

            <TextInput onParse={processJSON} />

            <div className="info-box">
              <h4>💡 Tips:</h4>
              <ul>
                <li>Upload a .json file or paste JSON text</li>
                <li>Nested objects will be flattened automatically</li>
                <li>Works with both single objects and arrays</li>
                <li>Click "Load Sample" to see an example</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <DataTable data={jsonData} headers={headers} />
            <Actions csvData={csvData} onReset={handleReset} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;