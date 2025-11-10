// ============================================
// SAMPLE MUSIC DATA
// ============================================

export const sampleSongs = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    duration: '3:20',
    bpm: 171,
    genre: 'Pop'
  },
  {
    id: '2',
    title: 'Levitating',
    artist: 'Dua Lipa',
    duration: '3:23',
    bpm: 103,
    genre: 'Pop'
  },
  {
    id: '3',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    duration: '3:53',
    bpm: 96,
    genre: 'Pop'
  },
  {
    id: '4',
    title: 'Sunflower',
    artist: 'Post Malone',
    duration: '2:38',
    bpm: 90,
    genre: 'Hip Hop'
  },
  {
    id: '5',
    title: 'Stay',
    artist: 'The Kid LAROI',
    duration: '2:21',
    bpm: 169,
    genre: 'Pop'
  }
];

// BPM categories
export const getBPMCategory = (bpm) => {
  if (bpm < 80) return { label: 'Slow', color: '#8b5cf6' };
  if (bpm < 120) return { label: 'Medium', color: '#10b981' };
  if (bpm < 140) return { label: 'Fast', color: '#f59e0b' };
  return { label: 'Very Fast', color: '#ef4444' };
};