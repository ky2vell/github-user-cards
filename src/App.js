import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserCard from './components/users/UserCard';
import Followers from './components/followers/Followers';
import './App.css';

export class App extends Component {
  state = {
    users: {}
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/gaearon', {
        headers: { Authorization: process.env.ACCESS_TOKEN }
      })
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/'>
            <UserCard users={this.state.users} />
          </Route>
          <Route exact path='/following'>
            <Followers />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
