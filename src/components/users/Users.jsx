import React from 'react';


const Users = ({users, editStateUser, saveUser, editDataUser, newUserData, deleteUser, cencel}) => {
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
                                    <td><input className="form-control" value={newUserData.name} onChange={editDataUser} name="name"/></td>
                                    <td><input className="form-control" value={newUserData.surname} onChange={editDataUser} name="surname"/></td>
                                    <td><input className="form-control" value={newUserData.desc} onChange={editDataUser} name="desc"/></td>
                                    <td><button className="btn" onClick={saveUser} id={user.id}>Save</button></td>
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
