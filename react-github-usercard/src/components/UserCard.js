import React from 'react';
import styled from 'styled-components';

import GitHubCalendar from 'react-github-calendar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'


class UserCard extends React.Component {

  render() {
    
    return(
      <UserContainer>
        <UserHeader>
          <ImgCon>
          <img src={this.props.user.avatar_url} alt='dario' />
          <a href={this.props.user.html_url}>{this.props.user.html_url}</a>
          <a href={this.props.user.html_url}><FontAwesomeIcon icon={faGithubSquare} size="3x" /></a>
          </ImgCon>
        <InfoDiv>
          <h1> Github: {this.props.user.login} </h1>
          
          <h3>Name: {this.props.user.name} </h3>
          <h5>Followers: {this.props.user.followers} </h5>
          <p>Bio: {this.props.user.bio} </p>
          <h4>Repos: {this.props.user.public_repos} </h4>
          <GitHubCalendar username="DarioLuque" />
        </InfoDiv>
        
        </UserHeader>
      </UserContainer>
    );
  }
}

export default UserCard;

// styles
const UserContainer = styled.div`
  background: white;
  border-radius: 1rem;
  margin: 0 auto;
  width: 60%;

  p {
    text-align: center;
    width: 75%;
  }

`;

const UserHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Righteous', cursive;
  text-align: center;
`;

const ImgCon = styled.div`
  width: 50%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: black;

    &:hover {
      color: green;
    }
  }

  img {
    margin: 5%;
    box-shadow: 2px 10px 10px grey;
    border-radius: 1rem;
    width: 90%;

    
  }
`;

const InfoDiv = styled.div`
  margin-right: 2%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`; 