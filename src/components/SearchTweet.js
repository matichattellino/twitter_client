import React, { useEffect, useState } from 'react';
import Formulario from './Formulario';
import ListTweets from './ListTweets';
import NavBar from './NavBar';  

//import clienteAxios from './config/axios';
import axios from 'axios';

function Layout() {

  const [ search, setSearch ] = useState("");
  const [tweets, guardarTweets] = useState([]);

  useEffect(() => {
      const consultarAPI = async () => {
        if(search === '' ) return;
        const count = 10;

        const clienteConsulta = await axios.get(`http://localhost:5000/?search=${search}`);
      
        guardarTweets(clienteConsulta.data);
      }
      consultarAPI();
  }, [search])

  return (
    <>
      <NavBar
  
      />
      <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de tweets</p>
        <Formulario
            setSearch={setSearch}
        />
      </div>
      <div className="row justify-content-center">
          <ListTweets
              tweets={tweets}
          />
      </div>
    </div>
    
    </>
);
}

export default Layout;

