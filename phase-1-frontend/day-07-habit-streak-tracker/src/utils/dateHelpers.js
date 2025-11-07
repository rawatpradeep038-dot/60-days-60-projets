// ============================================
// DATE HELPER FUNCTIONS
// ============================================

// Get today's date as YYYY-MM-DD string
export const getTodayString = () => {
  return new Date().toISOString().split('T')[0];
};

// Check if date is today
export const isToday = (dateString) => {
  return dateString === getTodayString();
};

// Get date X days ago
export const getDaysAgo = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split('T')[0];
};

// Calculate streak from completion dates
export const calculateStreak = (completedDates) => {
  if (!completedDates || completedDates.length === 0) return 0;
  
  // Sort dates in descending order
  const sorted = [...completedDates].sort().reverse();
  
  let streak = 0;
  let currentDate = new Date();
  
  for (let i = 0; i < sorted.length; i++) {
    const dateStr = new Date(currentDate).toISOString().split('T')[0];
    
    if (sorted[i] === dateStr) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }
  
  return streak;
};

// Get last 30 days for calendar view
export const getLast30Days = () => {
  const days = [];
  for (let i = 29; i >= 0; i--) {
    days.push(getDaysAgo(i));
  }
  return days;
};

// Format date nicely
export const formatDate = (dateString) => {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
};

// Get day name
export const getDayName = (dateString) => {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};