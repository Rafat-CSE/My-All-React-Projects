import React,{useState} from 'react';
import './App.css';
import Menu from './components/Menu';
import Form from './components/Form';
import Users from './components/Users';
import EditForm from './components/EditForm';


const Dummy = [];
let id = 0;
function App() {
  
  const [showMessage, setShowMessage] = useState(false);
  const [users, setUsers] = useState(Dummy);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const showFormHandler = () => {
    setShowForm((prevState) => prevState = true);
    setShowMessage((prevState)=>prevState =  false);
    setShowEditForm((prevState)=>prevState =  false);
  }

  const showUsersHandler = () => {
    setShowForm((prevState) => prevState = false);
    setShowMessage((prevState)=>prevState =  false);
    setShowEditForm((prevState)=>prevState =  false);
  }

  const onDataHandler = (getData) => {
    setUsers((prevData)=>{
      return [getData, ...prevData];
    });
  }

  const updateDataHandler = (newData, id) => {
    users.splice(id, 1, newData);
    setUsers((p)=>{return [...p]});
  }

  const editDataHandler = (e) =>{
    id = e;
    setShowEditForm((prevState)=>prevState=true);
  }

  const removeDataHandler = (e) => {
    
    users.splice(e, 1);
    setUsers((p)=>{return [...p]});
    setShowMessage((prevState)=>prevState =  true);
  }

  return (
    <div className="App">
      <hr/>
      <h1>CRUD App</h1>
      <hr/>
      <Menu onClickShowForm={showFormHandler} onclickShowUsers={showUsersHandler}/>
      
      {showMessage && <div>
        <hr/>
        <h2>|| User delete successsfully! ||</h2>
      </div>}
      
      <hr/>
      {!showForm && !showEditForm ? <Users users={users} clickRemove={removeDataHandler} clickEdit={editDataHandler}/>:""}
      {showForm && !showEditForm ? <Form data={onDataHandler} />:""}
      {showEditForm && <EditForm findData={users[id]} id={id} updateData={updateDataHandler} />}
      <hr/>
    </div>
  );
}

export default App;
