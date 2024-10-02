import React, { useState } from 'react';
import '../calendar/calendar.css'; // Importer le fichier CSS pour styliser le calendrier

// Type pour les événements
type Event = {
    date: string;
    title: string;
};

const Calendar: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [eventTitle, setEventTitle] = useState<string>('');

    const handleDateClick = (date: string) => {
        setSelectedDate(date);
    };

    const handleAddEvent = () => {
        if (selectedDate && eventTitle) {
            setEvents([...events, { date: selectedDate, title: eventTitle }]);
            setEventTitle('');
        }
    };

    const daysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const renderDays = () => {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const days = daysInMonth(currentMonth, currentYear);

        const daysArray = [];
        for (let day = 1; day <= days; day++) {
            const date = `${currentYear}-${currentMonth + 1}-${day}`;
            const eventForDay = events.find(event => event.date === date);

            daysArray.push(
                <div
                    key={day}
                    className={`calendar-day ${eventForDay ? 'has-event' : ''}`}
                    onClick={() => handleDateClick(date)}
                >
                    {day}
                    {eventForDay && <div className="event-dot"></div>}
                </div>
            );
        }

        return daysArray;
    };

    return (
        <div className="calendar_">
            <div className="calendar-header">
                <div className="calendar-month">November 2024</div>
            </div>
            <div className="calendar-grid">{renderDays()}</div>
            <div className="add-event">
                <input
                    type="text"
                    value={eventTitle}
                    placeholder="Event title"
                    onChange={(e) => setEventTitle(e.target.value)}
                />
                <button onClick={handleAddEvent}>Add Event</button>
            </div>
        </div>
    );
};

export default Calendar;