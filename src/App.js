import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import { useState, useEffect } from 'react';

function App() {
const apiKey="5f50b9f5"

const [movie, setMovie] = useState("")


const getMovie = async(searchTerm)=>{
  const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}=${searchTerm}`)

//--->Go to the site and search for Title
const data = await response.json()
//-----Turn info into JSON format
setMovie(data)
// ------> Take retrieved data and set it as a current Movie
}

useEffect(()=>{
  getMovie("Clueless");
}, []);

  return (
    <div className="App">
     <Form movieSearch={getMovie}/>

     <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
