import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export class Search extends Component {
  state = {
    input: ''
  };

  onSubmit = (e, props) => {
    e.preventDefault();
    if (this.state.input === '') {
      alert('Please enter a valid user!');
    } else {
      this.props.setURL(this.state.input);
      this.props.searchUsers(this.state.input);
      this.setState({ input: '' });
    }
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} className='d-flex align-items-center'>
        <FormGroup className='mb-0'>
          <Input
            type='text'
            name='input'
            placeholder='Search Users...'
            className='rounded-0'
            value={this.state.text}
            onChange={e => this.setState({ input: e.target.value })}
          />
        </FormGroup>
        <Button className='btn btn-dark rounded-0'>Search</Button>
      </Form>
    );
  }
}

export default Search;
