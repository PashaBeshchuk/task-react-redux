import React, { useState } from 'react';


const Users = ({users, deleteUser, updateUserDataThunk}) => {
    const [userData, setUserData] = useState({id: "", name:"", surname:"", desc:""});
    const cencel = () => {
        users.forEach(user => {
            user.editState = false;
        });
        setUserData(({id: "", name:"", surname:"", desc:""}));
    }
    //save your changes
    const saveUser = (user) => {
        const {editState, ...userData} = user;
        if(userData.id && userData.name && userData.surname && userData.desc) {
            updateUserDataThunk(userData);
            cencel();
        }
    }  
    const editUserData = (e) => {
        switch(e.target.name){
            case "name": 
                setUserData({...userData, name: e.target.value});      
                break;
            case "surname":
                setUserData({...userData, surname: e.target.value}); 
                break;
            case "desc":
                setUserData({...userData, desc: e.target.value}); 
                break;    
        }
    }
    const editStateUser = (e) => {
        users.forEach(user => {
            if(user.id === Number(e.target.id)) { 
                user.editState = true;
                setUserData(user);
            }
        });
    }

    return <>
        <div className="container">
            <table className="table table-striped">
                   <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Description</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return  <tr key={user.id}>
                            { user.editState ?
                                <>
                                    <th scope="row">{index+1}</th>
                                    <td><input className="form-control" value={userData.name}  onChange={editUserData} name="name"/></td>
                                    <td><input className="form-control" value={userData.surname} onChange={editUserData} name="surname"/></td>
                                    <td><input className="form-control" value={userData.desc}  onChange={editUserData} name="desc"/></td>
                                    <td><button className="btn" onClick={()=>saveUser(userData)} id={user.id}>Save</button></td>
                                    <td><button className="btn" onClick={cencel}>Cencel</button></td>
                                </>
                                :
                                <> 
                                    <th scope="row">{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.desc}</td>
                                    <td><button className="btn" onClick={editStateUser} id={user.id}>Edit</button></td>
                                    <td><button className="btn" onClick={deleteUser} id={user.id}>Delete</button></td>
                                </>
                            } 
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
        
    </>
}

export default Users;
