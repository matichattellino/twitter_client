import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
//import clienteAxios from './config/axios';
import axios from 'axios';

function App() {

  const [ q, guardarq ] = useState("");

/*   const consultarAPI = async () => {
      if(q === '' ) return;
      const count = 10;

      const clienteConsulta = await axios.get(`http://localhost:5000/?q=${q}&count=${count}`);

      const respuesta = await fetch(clienteConsulta);
      const resultado = await respuesta.json();

      console.log(resultado);
  } */

  useEffect(() => {
    const consultarAPI = async () => {
      if(q === '' ) return;
      const count = 10;

      const clienteConsulta = await axios.get(`http://localhost:5000/?q=${q}`);

      const respuesta = await fetch(clienteConsulta);
      const resultado = await respuesta.json();

      console.log(resultado);
    }
    consultarAPI();
  }, [q])

  return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de tweets</p>
          <Formulario
              guardarq={guardarq}
          />
        </div>
      </div>
  );
}

export default App;
