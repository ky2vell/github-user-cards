import React, { Component } from 'react';
import axios from 'axios';
import FollowerCard from '../followers/FollowerCard';
import LoadingPage from '../layout/LoadingPage';
import { Container, Row } from 'reactstrap';

export class Followers extends Component {
  state = {
    followers: [],
    isLoading: false
  };

  componentDidMount() {
    this.getFollowers();
  }

  getFollowers = async () => {
    this.setState({ isLoading: true });

    let res = await axios.get(
      'https://api.github.com/users/gaearon/followers',
      {
        headers: { Authorization: process.env.ACCESS_TOKEN }
      }
    );

    this.setState({ followers: res.data, isLoading: false });
  };

  render() {
    return this.state.isLoading ? (
      <Container className='d-flex justify-content-center loading'>
        <LoadingPage />
      </Container>
    ) : (
      <Container>
        <Row>
          {this.state.followers.map(follower => (
            <FollowerCard key={follower.id} follower={follower} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Followers;
