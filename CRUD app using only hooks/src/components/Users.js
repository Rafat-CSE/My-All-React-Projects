import React from 'react';
import './User.css';


const Users = (props) => {
    const {clickRemove} = props;
    const {clickEdit} = props;
    const l = props.users.length; 
    return (
        <div>
            { l==0 ? <h2>|| No user! ||</h2> : 
            
            <table border="1">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Post</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {props.users.map((user, index)=>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.post}</td>
                        <td>{user.salary}</td>
                        <td>
                            <button type="button" className="edit" onClick={()=>clickEdit(index)}>Edit</button>
                            <button type="button" className="delete" onClick={()=>clickRemove(index)}>Delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>}
        </div>
    );
}

export default Users;
