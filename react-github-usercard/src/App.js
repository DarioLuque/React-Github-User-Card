import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'
import Header from './components/Header'

import styled from 'styled-components';

import './App.css'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };

  }


  componentDidMount() {
    // User Data
    axios.get('https://api.github.com/users/DarioLuque')
    .then(res => {
      console.log(res.data, "user response.data")
      this.setState({user: res.data});
    })
    .catch(error => console.log(error));

    // Follower Data 
    axios.get('https://api.github.com/users/DarioLuque/followers')
    .then(res => {
      console.log(res.data, "user followers")
      this.setState({followers: res.data})
    })
    .catch(error => console.log(error));
  }

  render(){
  return (

    <div className="app-container" >
      <Header />
    {/* user */}
    <div> 
    <UserCard user={this.state.user} />
    </div>

    {/* followers */}
    <FollowerDiv>
      {this.state.followers.map((pers, index) => {
        return <FollowerCard key={index} followers={pers} />
      })}
    </FollowerDiv>

    </div>
  );
  }
}

export default App;

const FollowerDiv = styled.div`
  margin-top: 2%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;