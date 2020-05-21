import React from 'react';
import styled from 'styled-components';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

class FollowerCard extends React.Component {
  render() {
    return(     
      <FollowerContainer>
      <FollowerHeader>
        <FollowerImg>
        <img src={this.props.followers.avatar_url} alt='dario' />
        <a href={this.props.followers.html_url}>{this.props.followers.html_url}</a>

        </FollowerImg>
      <FollowerInfo>
        <h1> Github: {this.props.followers.login} </h1>
        <a href={this.props.followers.html_url}><FontAwesomeIcon icon={faGithubSquare} size="3x" /></a>
      </FollowerInfo>

      </FollowerHeader>
    </FollowerContainer>
  );
}
}

export default FollowerCard;

// styles
const FollowerContainer = styled.div`
background: white;
border-radius: 1rem;
margin: 2% auto;
width: 35%;
height: 35%;

p {
  text-align: center;
  width: 75%;
}

`;

const FollowerHeader = styled.div`
width: 100%;
margin-bottom: 3%;
margin-left: 3%;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Righteous', cursive;
text-align: center;
`;

const FollowerImg = styled.div`
width: 50%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 3%;

a {
  color: black;
  
  &:hover{
      color: green;
    }
}

img {
  border-radius: 1rem;
  box-shadow: 2px 10px 10px grey;
  margin: 4%;
  width: 90%
}
`;

const FollowerInfo = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  h1 {
    font-size: 1.3rem;
  }

  a {
    color: black;
    
    &:hover{
      color: green;
    }
  }
`; 
