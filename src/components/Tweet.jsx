import React from 'react';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
  return (
    <div className="tweet">
      <div className="body">
        <div className="top">
          <User user={props.tweet.user} />
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>

        <label>
          <h8>Message</h8> <Message message={props.tweet.message} />
        </label>
        <Actions />
      </div>
      <div>
        {' '}
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </div>
  );
}

export default Tweet;
