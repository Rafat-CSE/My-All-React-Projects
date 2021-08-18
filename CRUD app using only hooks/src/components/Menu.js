import React from 'react';
import './Menu.css';

const Menu = (props) => {
    const {onClickShowForm, onclickShowUsers} = props;
    return (
        <div>
            <button className="btn" onClick={onclickShowUsers}>All Users</button>
            <button className="btn" onClick={onClickShowForm}>Create User</button>
        </div>
    );
}

export default Menu;
