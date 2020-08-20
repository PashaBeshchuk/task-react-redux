import React from 'react';
import Form from './Form';
import {reset} from 'redux-form';
import { connect } from 'react-redux';
import { addNewUserThunk } from '../../redux/actions';

const UserCreateForm = ({addNewUserThunk, reset}) => {
    const onSubmit = (userData) => {
        addNewUserThunk(userData);
        reset('createNewUser');
    }
    return <div className="container" style={{marginBottom:"20px"}}>
        <h1>Create new user</h1>
        <Form onSubmit={onSubmit}/>
    </div>
}

export default connect((state)=>({}), {addNewUserThunk, reset})(UserCreateForm)