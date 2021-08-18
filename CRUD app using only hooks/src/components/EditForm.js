import React,{useState} from 'react';
import './Form.css';

const EditForm = (props) => {

    const [showMessage, setShowMessage] = useState(false);
    const [name, setName] = useState(props.findData.name);
    const [email, setEmail] = useState(props.findData.email);
    const [post, setPost] = useState(props.findData.post);
    const [salary, setSalary] = useState(props.findData.salary);


    const nameChangeHandler = (e) => {
        const newName = e.target.value;
        setName(newName);
    }
    const emailChangeHandler = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    }
    const postChangeHandler = (e) => {
        const newPost = e.target.value;
        setPost(newPost);
    }
    const salaryChangeHandler = (e) => {
        const newSalary = e.target.value;
        setSalary(newSalary);
    }



    const submitHandler = (e) => {
        e.preventDefault();
        const newData = {
            name: name,
            email: email,
            post: post,
            salary: salary
        }
        props.updateData(newData, props.id);
        setShowMessage((prevData)=>!prevData);
    }


    return (
        <div>
            {showMessage && <div>
                <h2>|| User Updated successfully! ||</h2>
            </div>}

            {!showMessage &&
            
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label>Name</label><span>:</span>
                    <input type="text" value={name} onChange={nameChangeHandler}/>
                </div>
                <div className="form-control">
                    <label>Email</label><span>:</span>
                    <input type="email" value={email} onChange={emailChangeHandler}/>
                </div>
                <div className="form-control">
                    <label>Post</label><span>:</span>
                    <input type="text" value={post} onChange={postChangeHandler}/>
                </div>
                <div className="form-control">
                    <label>Salary</label><span>:</span>
                    <input type="text" value={salary} onChange={salaryChangeHandler}/>
                </div>
                <button type="submit" className="btn">Update User</button>
            </form>}
        </div>
    );
}

export default EditForm;
