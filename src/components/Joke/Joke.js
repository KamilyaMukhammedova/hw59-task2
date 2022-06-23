import React from 'react';

const Joke = (props) => {
  return (
    <div className="alert alert-secondary">
      <p>{props.joke.title}</p>
    </div>
  );
};

export default Joke;