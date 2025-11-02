// ============================================
// TIME FORMATTER UTILITY
// ============================================

export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  
  const minutesStr = String(minutes).padStart(2, '0');
  const secondsStr = String(secs).padStart(2, '0');
  
  return `${minutesStr}:${secondsStr}`;
};