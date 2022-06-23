import React from 'react';

const Joke = ({joke}) => {
  return (
    <div className="alert alert-secondary">
      <p>{joke}</p>
    </div>
  );
};

export default Joke;