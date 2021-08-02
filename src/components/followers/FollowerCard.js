import React from 'react';
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardLink,
  Button
} from 'reactstrap';

const FollowerCard = props => {
  return (
    <Col md='6' lg='4'>
      <Card className='shadow-sm mt-1 mb-4'>
        <CardImg
          top
          width='100%'
          src={props.follower.avatar_url}
          alt={props.follower.login}
        />
        <CardBody className='text-center'>
          <CardTitle>
            <h3>{props.follower.login}</h3>
          </CardTitle>
          <Button color='secondary' size='lg' className='my-2'>
            <CardLink href={props.follower.html_url} className='text-white'>
              Visit GitHub Profile
            </CardLink>
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FollowerCard;
