import React, { useReducer,useState } from 'react';
import logo from './logo.svg';
import {team} from './team'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,NavbarBrand} from 'reactstrap';
import Form from './Components/Form';
import Members from './Components/Members';
import './App.css';

function App() {
  const [isTeam, setIsTeam] = useState(team)

  const addNewMem = (member) =>{
    const newMem = {
      name:member.name,
      email:member.email,
      role:member.role
    };
    setIsTeam([...isTeam,newMem])
  }
  return (
    <div className="App">
      <Navbar color="primary mb-3" light>
        <NavbarBrand>Welcome to The Team Builder</NavbarBrand>
      </Navbar>
        <Form addNewMem={addNewMem}/>
        <Members members={isTeam}/>
    </div>
  );
}

export default App;
