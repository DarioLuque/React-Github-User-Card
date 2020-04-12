import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'

import './App.css'


class App extends React.Component {
  state = {
    user: {}
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/DarioLuque').then(res => {
      console.log(res.data, "user response.data")
      this.setState({user: res.data});
    });
  }

  render(){
  return (

    <div className="app-container" >
      <UserCard user={this.state.user} />
    </div>
  );
  }
}

export default App;

