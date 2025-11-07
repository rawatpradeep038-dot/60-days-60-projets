// ============================================
// CALENDAR COMPONENT
// Visual 30-day calendar
// ============================================

import React from 'react';
import { getLast30Days, formatDate, getDayName } from '../utils/dateHelpers';

function Calendar({ habit }) {
  const last30Days = getLast30Days();

  return (
    <div className="calendar-container">
      <h4 className="calendar-title">📅 Last 30 Days</h4>
      <div className="calendar-grid">
        {last30Days.map(date => {
          const isCompleted = habit.completedDates.includes(date);
          
          return (
            <div
              key={date}
              className={`calendar-day ${isCompleted ? 'completed' : 'incomplete'}`}
              title={`${getDayName(date)} ${formatDate(date)}`}
            >
              <div className="day-label">{getDayName(date)}</div>
              <div className="day-number">{new Date(date + 'T00:00:00').getDate()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;