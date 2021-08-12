import React from 'react';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense(props) {

    const getAllData = (enteredValue) => {
        const expenseData = {
            ...enteredValue,
            id: Math.random().toString()
        };
        props.onFindData(expenseData);
    };

    return (
        <Card className="form">
            <ExpenseForm onSaveData={getAllData} />
        </Card>
    );
}
