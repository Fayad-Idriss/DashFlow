import React, { useState } from 'react';
import '../taskLine/TaskLine.css';

// Définition des types d'événements
type Event = {
    id: number;
    title: string;
    startTime: string;
    endTime: string;
    color: string;
};

const TaskLine: React.FC = () => {
    // Liste d'événements
    const [events, setEvents] = useState<Event[]>([
        { id: 1, title: 'Netflix Meetup', startTime: '8:00 AM', endTime: '8:30 AM', color: '#FF497C' },
        { id: 2, title: 'Terk Client Call', startTime: '9:00 AM', endTime: '9:30 AM', color: '#34D2DF' },
    ]);

    return (
        <div className="task-line">
            <h3 className="task-title">Task Line</h3>
            <div className="task-container">
                {events.map(event => (
                    <div key={event.id} className="task-event" style={{ backgroundColor: event.color }}>
                        <span className="task-event-title">{event.title}</span>
                        <span className="task-event-time">{event.startTime} - {event.endTime}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskLine;