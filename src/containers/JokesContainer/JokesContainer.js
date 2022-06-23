import React, {useEffect, useState} from 'react';
import Joke from "../../components/Joke/Joke";

const JokesContainer = () => {
  console.log('[jokes container] render');

  const [joke, setJoke] = useState('');
  const jokeUrl = 'https://api.chucknorris.io/jokes/random';

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(jokeUrl);

      if(response.ok) {
        const joke = await response.json();
        console.log(joke);
        setJoke(joke.value);
      }
    };

    fetchJoke().catch(e => console.error(e));
  }, []);

  return (
    <div className="Container">
      <Joke joke={joke}/>
    </div>
  );
};

export default JokesContainer;