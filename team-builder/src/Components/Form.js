import React, { Component,useState } from 'react';

const Form = (props) => {
    const [member,setMember] = useState({name:"",email:"",role:""})

    const handleChanges = (evt) =>{
        setMember({...member, [evt.target.name]:evt.target.value})
    }

    const submitForm = (evt) =>{
        evt.preventDefault();
        props.addNewMem(member);
        setMember({name:"",email:"",role:""})
    }

    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input 
                onChange={handleChanges}
                id="name"
                type="text"
                placeholder="Enter First & Last Name"
                name="name"
                value={member.name}
            /><br/>
            <label htmlFor="email">Email</label>
            <input 
                onChange={handleChanges}
                id="email"
                type="text"
                placeholder="Enter Email Address"
                name="email"
                value={member.email}
            /><br/>
            <label htmlFor="role">Role</label>
            <input 
                onChange={handleChanges}
                id="role"
                type="text"
                placeholder="Enter your Role"
                name="role"
                value={member.role}
            /><br/>
            <button type="submit">Add Team Member</button>    
        </form>
    )
}

export default Form;