// import logo from './logo.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';

function App() {

  const [api, setApi] = useState([]);

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get('http://localhost:3001/menu')
      .then(function (response) {
        // handle success
        setApi([...response.data])
        // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [])


  return (
    <div >
      <Header />
      <Body api={api} />
    </div>
  );
}

export default App;
