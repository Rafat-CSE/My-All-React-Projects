import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem(props) {
    return (
        <Card className="item">
            <ExpenseDate date={props.date} />
            <div className="name">
                <p>{props.name}</p>
            </div>
        </Card>
    )
}
