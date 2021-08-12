import React from 'react';
import Card from '../UI/Card';
import './ExpenseDate.css';

export default function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-Us', { day: '2-digit' });
    const year = props.date.getFullYear();
    const hour = props.date.getHours();
    const minutes = props.date.getMinutes();
    const seconds = props.date.getSeconds();
    return (
        <Card className="date">
            <p>Month : {month}</p>
            <p>Day : {day}</p>
            <p>Year : {year}</p>
            <p>Time : {hour}:{minutes}:{seconds}</p>
        </Card>
    )
}
