import React from 'react';

function DataTable({ data, headers }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="table-container">
      <div className="table-header">
        <h3 className="table-title">📊 Data Preview</h3>
        <span className="row-count">{data.length} rows</span>
      </div>
      
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>
                    {row[header] !== undefined ? String(row[header]) : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;