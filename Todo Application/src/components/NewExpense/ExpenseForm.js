import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {


    const [enterName, setEnterName] = useState('');
    const [enableAddButton, setEnableAddButton] = useState(false);


    const enterNameHandler = (event) => {
        setEnterName(event.target.value);
        setEnableAddButton(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            id: Math.random().toString(),
            name: enterName,
            date: new Date(),
        };
        props.onSaveData(data);
        setEnterName('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="name">
                <label>Enter your name</label>
                <input type="text" value={enterName} onChange={enterNameHandler} />
                {enableAddButton === false ? '' : <button type="submit" className="btn">Add Name</button>}

            </div>
        </form>
    )
}
