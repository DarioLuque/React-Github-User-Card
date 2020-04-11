import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state = {
    user: {}
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/DarioLuque').then(res => {
      console.log(res.data, "user response.data")
      this.setState({user: Response.data});
    });
  }

  render(){
  return (

    <div>
      
    </div>
  );
  }
}

export default App;
