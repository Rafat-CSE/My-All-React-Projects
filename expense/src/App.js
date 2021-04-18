import React, { useState } from 'react';
import Expense from './Components/Expense/Expense';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSE = [
    {
        title : 'Car Insurance',
        amount : 298.64,
        date : new Date(2021, 2, 28)
    },
    {
        title : 'Top Insurance',
        amount : 290.64,
        date : new Date(2021, 0, 28)
    },
    {
        title : 'Bus Insurance',
        amount : 220.64,
        date : new Date(2021, 5, 28)
    },
    {
        title : 'Cat Insurance',
        amount : 245.64,
        date : new Date(2021, 3, 28)
    }
];

function App() {
    const [expense, setExpense] = useState(DUMMY_EXPENSE);
    const addExpenseDataHandler = (expense) => {
        setExpense((pre) => {
            return [expense, ...pre];
        });
    };
    return (
        <div>
            <NewExpense onAddExpenseData={addExpenseDataHandler} />
            <Expense item={expense}/>
        </div>
    )
}
export default App;