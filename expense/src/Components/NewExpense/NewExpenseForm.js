import React, { useState } from 'react';
import './NewExpenseForm.css';
const NewExpenseForm = (props) => {

    const [enterTitle, setEnterTitle] = useState();
    const [enterAmount, setEnterAmount] = useState();
    const [enterDate, setEnterDate] = useState();

    const titleChangeHandler = (event) => {
        setEnterTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expense = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        };
        props.onSaveExpenseData(expense);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }

    const cancelNewExpenseHandler = () => {
        return props.onCancel();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Expense Name</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2021-12-31" value={enterDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={cancelNewExpenseHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default NewExpenseForm;