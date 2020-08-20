import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllUsersThunk, updateUserDataThunk, deleteUserThunk } from '../../redux/actions';
import Users from './Users';
import Pagination from './Pagination';

const UsersContainer = ({getAllUsersThunk, updateUserDataThunk, users, deleteUserThunk}) => {
    useEffect(()=> {
        getAllUsersThunk();
    }, [])
    const listPages = [];
    const [currentPage,  setCurrentPage] = useState(1);
    const [userState,  setUserState] = useState();
    const [newUserData, setNewUserData] = useState({id: "", name:"", surname:"", desc:""});
    //calculating actual users
    const  numberOfPages = 5;
    const lastUser = currentPage * numberOfPages;
    const firstUser = lastUser - numberOfPages;
    const currentUsers = users.slice(firstUser, lastUser);

    //change the current page
    const anotherPage = (e) => setCurrentPage(e.target.id);
    //undo changes and reset state
    const cencel = (e) => {
        currentUsers.forEach(user => {
            user.editState = false;
        });
        setUserState(currentUsers);
    }
    //change the current page
    const editStateUser = (e) => {
        currentUsers.forEach(user => {
            if(user.id === Number(e.target.id)) { 
                user.editState = true;
                setNewUserData(user);
            } else {
                user.editState = false;
            }
        });
        setUserState(currentUsers);
    }
    //save your changes
    const saveUser = (e) => {
        setNewUserData({...newUserData, id: e.target.id});
        const {editState, ...userData} = newUserData;

        if(userData.id && userData.name && userData.surname && userData.desc) {
            updateUserDataThunk(userData);
            cencel()
            setUserState(currentUsers);
        }
    }
    //new data that you enter
    const editDataUser = (e) => {
        switch(e.target.name){
            case "name": 
                setNewUserData({...newUserData, name: e.target.value});      
                break;
            case "surname":
                setNewUserData({...newUserData, surname: e.target.value}); 
                break;
            case "desc":
                setNewUserData({...newUserData, desc: e.target.value}); 
                break;    
        }
    }
    const deleteUser = (e) => {
        deleteUserThunk(e.target.id);
    }
   
    //list of actual users for local state
    if(currentUsers && !userState) {
        setUserState(currentUsers.map(user => {
            user.editState = false;
        }))
    }

    //calculate length by simple pagination
    for (let i = 1; i <= Math.ceil(users.length / numberOfPages); i++) {
        listPages.push(i);
    }
    return <>
        <Users 
            users={currentUsers} 
            editStateUser={editStateUser}
            saveUser={saveUser}
            editDataUser={editDataUser}
            newUserData={newUserData}
            deleteUser={deleteUser}
            cencel={cencel}/>
        <Pagination listPages={listPages} anotherPage={anotherPage} />
    </>
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
    }
}

export default connect(mapStateToProps, { getAllUsersThunk, updateUserDataThunk, deleteUserThunk })(UsersContainer);
