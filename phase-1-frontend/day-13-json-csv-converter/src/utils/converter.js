import Papa from 'papaparse';

// Parse JSON string to object
export const parseJSON = (jsonString) => {
  try {
    const parsed = JSON.parse(jsonString);
    
    // Convert to array if single object
    if (!Array.isArray(parsed)) {
      return [parsed];
    }
    
    return parsed;
  } catch (error) {
    throw new Error('Invalid JSON format');
  }
};

// Convert JSON to CSV using PapaParse
export const jsonToCSV = (jsonData) => {
  if (!jsonData || jsonData.length === 0) {
    throw new Error('No data to convert');
  }
  
  const csv = Papa.unparse(jsonData);
  return csv;
};

// Get column headers from JSON data
export const getHeaders = (jsonData) => {
  if (!jsonData || jsonData.length === 0) return [];
  
  const headers = new Set();
  
  jsonData.forEach(item => {
    Object.keys(item).forEach(key => headers.add(key));
  });
  
  return Array.from(headers);
};

// Flatten nested objects (simple version)
export const flattenObject = (obj, prefix = '') => {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(acc, flattenObject(value, newKey));
    } else {
      acc[newKey] = value;
    }
    
    return acc;
  }, {});
};

// Flatten array of objects
export const flattenData = (data) => {
  return data.map(item => flattenObject(item));
};