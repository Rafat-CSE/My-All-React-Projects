import React, { useState } from 'react';
import Card from './components/UI/Card';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY = [];

function App() {

  const [expense, setExpense] = useState(DUMMY);
  const [count, setCount] = useState(0);
  const getAllDataFromNewExpense = (enteredData) => {
    setCount(count + 1);
    setExpense((prevData) => {
      return [enteredData, ...prevData]
    });
  };


  return (
    <Card className="main">
      <div className="header">
        <h2>Todo Application</h2>
        <h3>Number of Elements : {count}</h3>
      </div>

      <NewExpense onFindData={getAllDataFromNewExpense} />
      {expense.length === 0 && <Card className="header"><h2>No Data Here</h2></Card>}
      {expense.length > 0 && <Expense data={expense} />}

    </Card>
  );
}

export default App;