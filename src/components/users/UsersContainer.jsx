import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllUsersThunk, updateUserDataThunk, deleteUserThunk } from '../../core/actions';
import Users from './Users';
import Pagination from './Pagination';
import { getCurrentPages, getListPages } from './users.constants';

const UsersContainer = ({getAllUsersThunk, updateUserDataThunk, users, deleteUserThunk}) => {
    useEffect(()=> {
        getAllUsersThunk();
    }, [])
    let listPages = [];
    const [currentPage,  setCurrentPage] = useState(1);
    //calculating actual users
    const  numberOfPages = 5;
    const currentUsers = getCurrentPages(currentPage, numberOfPages, users);

    //change the current page
    const anotherPage = (e) => setCurrentPage(e.target.id);
    const deleteUser = (e) => {
        deleteUserThunk(e.target.id);
    }
    listPages = getListPages(users, numberOfPages)
    return <>
        <Users 
            users={currentUsers} 
            deleteUser={deleteUser}
            updateUserDataThunk={updateUserDataThunk}/>
        <Pagination listPages={listPages} anotherPage={anotherPage} />
    </>
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
    }
}

export default connect(mapStateToProps, { getAllUsersThunk, updateUserDataThunk, deleteUserThunk })(UsersContainer);
