import React, { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';
const NewExpense = (props) => {
    const enterExpenseDataHandler = (receiveExpenseDataFromNewExpenseForm) => {
        const expense = {
            ...receiveExpenseDataFromNewExpenseForm,
            id: Math.random().toString()
        };
        props.onAddExpenseData(expense);
    };

    const [addNewExpense, setAddNewExpense] = useState(false)
    const addNewExpenseHandler = () => {
        setAddNewExpense(true);
    }
    const cancelNewExpenseForm = () => {
        setAddNewExpense(false);
    }

    return (
        <div className="new-expense">
            {addNewExpense == true ? <NewExpenseForm onSaveExpenseData={enterExpenseDataHandler} onCancel={cancelNewExpenseForm} /> : <button onClick={addNewExpenseHandler}>Add New Expense</button>}
        </div>
    );
}
export default NewExpense;