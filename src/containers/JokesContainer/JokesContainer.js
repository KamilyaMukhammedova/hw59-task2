import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import Joke from "../../components/Joke/Joke";
import Jokes from "../../components/Jokes/Jokes";

const JokesContainer = () => {
  const [joke, setJoke] = useState({title: ''});
  const [jokes, setJokes] = useState([]);

  const jokeUrl = 'https://api.chucknorris.io/jokes/random';

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(jokeUrl);

      if(response.ok) {
        const joke = await response.json();
        setJoke({title: joke.value});
      }
    };

    fetchJoke().catch(e => console.error(e));
  }, []);

  const onNewJokes = async () => {
    setJokes([]);
    const jokesUrl = [];
    const jokes = [];

    for(let i = 0; i < 5; i++) {
      jokesUrl.push(jokeUrl);
    }

    await Promise.all(
      jokesUrl.map(url => fetch(url)
        .then(res => res.json())
        .then(data => {
          const joke = {
            title: data.value,
            id: nanoid()
          };
          jokes.push(joke);
        })
        .catch(e => console.error(e))
      )
    );

    setJokes(jokes);
  };

  return (
    <div className="Container">
      <Joke joke={joke}/>
      <div className="mt-5">
        <button type="button" onClick={onNewJokes} className="mb-5">New jokes</button>
      </div>
      <div>
        <Jokes jokes={jokes}/>
      </div>
    </div>
  );
};

export default JokesContainer;