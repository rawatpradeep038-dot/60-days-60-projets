// ============================================
// COLOR EXTRACTOR UTILITY
// Purpose: Extract dominant colors from image
// ============================================

/**
 * Convert RGB to HEX color code
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {string} - Hex color code (e.g., "#FF5733")
 */
export const rgbToHex = (r, g, b) => {
  // Convert each color to hex and pad with 0 if needed
  const toHex = (n) => {
    const hex = n.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
};

/**
 * Calculate color brightness (0-255)
 * @param {number} r - Red value
 * @param {number} g - Green value
 * @param {number} b - Blue value
 * @returns {number} - Brightness value
 */
export const getBrightness = (r, g, b) => {
  // Formula: perception-based brightness calculation
  return (r * 299 + g * 587 + b * 114) / 1000;
};

/**
 * Extract dominant colors from image
 * @param {File} imageFile - Uploaded image file
 * @param {number} colorCount - Number of colors to extract (default: 5)
 * @returns {Promise<Array>} - Array of color objects with hex, rgb, and name
 */
export const extractColors = (imageFile, colorCount = 5) => {
  return new Promise((resolve, reject) => {
    // Create image element
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    img.onload = () => {
      // Set canvas size to image size
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw image on canvas
      ctx.drawImage(img, 0, 0);
      
      // Get pixel data from canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data; // Array of RGBA values
      
      // Store color counts
      const colorMap = {};
      
      // Loop through pixels (every 4 values = 1 pixel: R,G,B,A)
      // Skip some pixels for performance (every 10th pixel)
      for (let i = 0; i < pixels.length; i += 40) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];
        
        // Skip transparent pixels
        if (a < 125) continue;
        
        // Skip very dark or very bright pixels
        const brightness = getBrightness(r, g, b);
        if (brightness < 20 || brightness > 240) continue;
        
        // Round colors to reduce variations
        const roundedR = Math.round(r / 10) * 10;
        const roundedG = Math.round(g / 10) * 10;
        const roundedB = Math.round(b / 10) * 10;
        
        const colorKey = `${roundedR},${roundedG},${roundedB}`;
        
        // Count this color
        colorMap[colorKey] = (colorMap[colorKey] || 0) + 1;
      }
      
      // Convert to array and sort by count
      const sortedColors = Object.entries(colorMap)
        .sort((a, b) => b[1] - a[1]) // Sort by count (most common first)
        .slice(0, colorCount) // Get top N colors
        .map(([colorKey]) => {
          const [r, g, b] = colorKey.split(',').map(Number);
          return {
            hex: rgbToHex(r, g, b),
            rgb: `rgb(${r}, ${g}, ${b})`,
            r,
            g,
            b
          };
        });
      
      resolve(sortedColors);
    };
    
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    // Load image from file
    img.src = URL.createObjectURL(imageFile);
  });
};

/**
 * Generate complementary color
 * @param {string} hexColor - Hex color code
 * @returns {string} - Complementary hex color
 */
export const getComplementaryColor = (hexColor) => {
  // Remove # if present
  const hex = hexColor.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Get complementary by inverting
  const compR = 255 - r;
  const compG = 255 - g;
  const compB = 255 - b;
  
  return rgbToHex(compR, compG, compB);
};