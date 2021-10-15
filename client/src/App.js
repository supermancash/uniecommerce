import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';

function App() {
  const getUsers = () => {
    return fetch('/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  useEffect(() => {
    getUsers().then((res) => {
      let data = res.json();
      data.then(body => {
        document.getElementById("usersP").innerHTML = body.response;
      });
    });
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from the frontend
        </p>
        <p id="usersP"/>
      </header>
    </div>
  );
}

export default App;
