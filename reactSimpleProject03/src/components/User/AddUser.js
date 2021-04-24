import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {
    const [enterUsername, setEnterUsername] = useState('');
    const [enterAge, setEnterAge] = useState('');
    const [error, setError] = useState();
    const addUserSubmitForm = (event) => {
        event.preventDefault();
        if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
            setError({
                name: 'Invalid Input',
                content: 'Please enter username and age'
            });
            return;
        }
        if (+enterAge < 1) {
            setError({
                name: 'Invalid Age',
                content: 'Please enter valid age!!'
            });
            return;
        }
        props.onUsersList(enterUsername, enterAge);
        setEnterUsername('');
        setEnterAge('');
    };

    const changeUsernameHandler = (event) => {
        setEnterUsername(event.target.value);
    };
    const changeAgeHandler = (event) => {
        setEnterAge(event.target.value);
    };

    const cancelErrorMassageModelHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (<ErrorModel title={error.name} message={error.content} onConfirm={cancelErrorMassageModelHandler} />)}
            <Card className={classes.input}>
                <form onSubmit={addUserSubmitForm}>
                    <label htmlFor="userName">Username</label>
                    <input id="userName" type="text" value={enterUsername} onChange={changeUsernameHandler} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enterAge} onChange={changeAgeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;