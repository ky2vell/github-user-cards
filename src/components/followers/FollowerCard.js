import React from 'react';

const FollowerCard = props => {
  return (
    <div>
      <img src={props.follower.avatar_url} alt={props.follower.login} />
      <h1>{props.follower.login}</h1>
      <a href={props.follower.html_url}>Visit GitHub Profile</a>
    </div>
  );
};

export default FollowerCard;
