import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Badge, Row, Col } from 'reactstrap';

const UserCard = props => {
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = props.users;

  return (
    <Row>
      <Col>
        <div className='py-4' style={{ fontSize: '1.2rem' }}>
          Hireable:{' '}
          {hireable ? (
            <i className='fas fa-check-square text-success'></i>
          ) : (
            <i className='fas fa-window-close text-danger'></i>
          )}
        </div>
        <Card className='shadow p-5'>
          <Row>
            <Col md='4' className=''>
              <img
                src={avatar_url}
                alt=''
                className='rounded mb-2'
                style={{ width: '175px' }}
              />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </Col>
            <Col md='3'>
              <Badge color='primary'>Followers: {followers}</Badge>
              <Badge color='success'>Following: {following}</Badge>
              <Badge color='danger'>Public Repos: {public_repos}</Badge>
              <Badge color='warning'>Public Gists: {public_gists}</Badge>
            </Col>
            <Col md='4'>
              <div>
                {bio && (
                  <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </Fragment>
                )}
                <Button
                  href={html_url}
                  className='bg-dark text-white border-dark mb-2'
                >
                  Visit GitHub Profile
                </Button>
                <ul className='list-unstyled'>
                  <li>
                    {login && (
                      <Fragment>
                        <strong>Username:</strong> {login}
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {company && (
                      <Fragment>
                        <strong>Company:</strong> {company}
                      </Fragment>
                    )}
                  </li>
                  <li>
                    {blog && (
                      <Fragment>
                        <strong>Website:</strong> {blog}
                      </Fragment>
                    )}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Card>
        <Link
          to='/following'
          className='d-block text-right mt-4'
          style={{ fontSize: '1.2rem' }}
        >
          See Who's Following {name} <i className='fas fa-arrow-right'></i>
        </Link>
      </Col>
    </Row>
  );
};

export default UserCard;
