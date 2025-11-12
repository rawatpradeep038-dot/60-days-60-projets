// Pattern generators
export const patterns = {
  dots: (size, spacing, color1) => `
    <pattern id="dots" x="0" y="0" width="${spacing}" height="${spacing}" patternUnits="userSpaceOnUse">
      <circle cx="${spacing / 2}" cy="${spacing / 2}" r="${size}" fill="${color1}" />
    </pattern>
  `,

  stripes: (size, spacing, color1, color2) => `
    <pattern id="stripes" x="0" y="0" width="${spacing}" height="${spacing}" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="${size}" height="${spacing}" fill="${color1}" />
      <rect x="${size}" y="0" width="${size}" height="${spacing}" fill="${color2}" />
    </pattern>
  `,

  grid: (size, spacing, color1) => `
    <pattern id="grid" x="0" y="0" width="${spacing}" height="${spacing}" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="${spacing}" y2="0" stroke="${color1}" stroke-width="${size}" />
      <line x1="0" y1="0" x2="0" y2="${spacing}" stroke="${color1}" stroke-width="${size}" />
    </pattern>
  `,

  waves: (size, spacing, color1) => `
    <pattern id="waves" x="0" y="0" width="${spacing * 2}" height="${spacing}" patternUnits="userSpaceOnUse">
      <path d="M0,${spacing / 2} Q${spacing / 2},${spacing / 2 - size} ${spacing},${spacing / 2} T${spacing * 2},${spacing / 2}" 
            stroke="${color1}" stroke-width="${size}" fill="none" />
    </pattern>
  `,

  hexagon: (size, spacing, color1) => {
    const h = size * Math.sqrt(3);
    return `
      <pattern id="hexagon" x="0" y="0" width="${spacing * 1.5}" height="${h}" patternUnits="userSpaceOnUse">
        <polygon points="${size / 2},0 ${size},${h / 4} ${size},${(3 * h) / 4} ${size / 2},${h} 0,${(3 * h) / 4} 0,${h / 4}" 
                 fill="none" stroke="${color1}" stroke-width="2" />
        <polygon points="${size + size / 2},${h / 2} ${size * 2},${(3 * h) / 4} ${size * 2},${h + h / 4} ${size + size / 2},${h + h / 2} 
                         ${size},${h + h / 4} ${size},${(3 * h) / 4}" 
                 fill="none" stroke="${color1}" stroke-width="2" />
      </pattern>
    `;
  },

  diagonal: (size, spacing, color1, color2) => `
    <pattern id="diagonal" x="0" y="0" width="${spacing}" height="${spacing}" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="${spacing}" height="${spacing}" fill="${color2}" />
      <path d="M0,${spacing} L${spacing},0" stroke="${color1}" stroke-width="${size}" />
    </pattern>
  `,

  circles: (size, spacing, color1, color2) => `
    <pattern id="circles" x="0" y="0" width="${spacing}" height="${spacing}" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="${spacing}" height="${spacing}" fill="${color2}" />
      <circle cx="${spacing / 2}" cy="${spacing / 2}" r="${size}" fill="none" stroke="${color1}" stroke-width="2" />
    </pattern>
  `
};

export const patternTypes = [
  { id: 'dots', name: 'Dots', icon: '⚫' },
  { id: 'stripes', name: 'Stripes', icon: '▭' },
  { id: 'grid', name: 'Grid', icon: '⊞' },
  { id: 'waves', name: 'Waves', icon: '〰️' },
  { id: 'hexagon', name: 'Hexagon', icon: '⬢' },
  { id: 'diagonal', name: 'Diagonal', icon: '⧸' },
  { id: 'circles', name: 'Circles', icon: '◯' }
];