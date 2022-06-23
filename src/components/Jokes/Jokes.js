import React from 'react';

const Jokes = (props) => {
  return props.jokes.map(joke => (
    <div className="alert alert-warning" key={joke.id}>
      <p>{joke.title}</p>
    </div>
  ));
};

export default Jokes;