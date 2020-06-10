import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import UserCard from './components/users/UserCard';
import Followers from './components/followers/Followers';
import { Container } from 'reactstrap';
import './App.css';

export class App extends Component {
  state = {
    users: {},
    text: 'gaearon'
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.text}`, {
        headers: { Authorization: process.env.ACCESS_TOKEN }
      })
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  searchUsers = input => {
    axios
      .get(`https://api.github.com/users/${input}`, {
        headers: { Authorization: process.env.ACCESS_TOKEN }
      })
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.log(err));
  };

  setURL = input => {
    return this.setState({ text: input });
  };

  render() {
    return (
      <Router>
        <Header />
        <Container>
          <Route exact path='/'>
            <UserCard
              users={this.state.users}
              setURL={this.setURL}
              searchUsers={this.searchUsers}
            />
          </Route>
          <Route exact path='/following'>
            <Followers text={this.state.text} />
          </Route>
        </Container>
      </Router>
    );
  }
}

export default App;
