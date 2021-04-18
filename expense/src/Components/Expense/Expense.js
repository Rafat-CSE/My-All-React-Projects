import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expense(props) {
    const [filterYear, setFilterYear] = useState('2020');
    const dropdownFilter = (expenseYear) => {
        setFilterYear(expenseYear);
    }
    const filterExpense = props.item.filter((expense) => (
        expense.date.getFullYear().toString() === filterYear
    ));
    return (
        <Card className="expense">
            <ExpensesFilter selected={filterYear} onChangeFilter={dropdownFilter} />
            <ExpenseChart expenses={filterExpense} />
            <ExpenseList items={filterExpense} />
        </Card>
    );
}
export default Expense;