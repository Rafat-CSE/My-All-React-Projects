import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expense.css'

function Expense(props) {
    return (
        <Card className="expense">
            {props.data.map((getAllExpenseData) => (
                <ExpenseItem name={getAllExpenseData.name} date={getAllExpenseData.date} />))}

        </Card>
    );
}
export default Expense;