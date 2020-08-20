import React from 'react';
import './App.css';
import UsersContainer from './components/users/UsersContainer';
import UserCreateForm from './components/forms/UserCreateForm';

function App() {
  return (
    <div className="App">
      <UserCreateForm/>
      <UsersContainer/>
    </div>
  );
}

export default App;
