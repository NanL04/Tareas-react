import React, { useState } from 'react';
import './style.css';

function Semaforo() {

  const [Rojo, setRojo] = useState(false);
  const [Amarillo, setAmarillo] = useState(false);
  const [Verde, setVerde] = useState(false);

  function encendido (color) {
    setRojo(color === 'Rojo');
    setAmarillo(color === 'Amarillo');
    setVerde(color === 'Verde');
  };


  return (
    <div className="Semaforo">
      <div className={`rojo ${Rojo ? 'encendido' : ''}`} onClick={() => encendido('Rojo')}></div>
      <div className={`amarillo ${Amarillo ? 'encendido' : ''}`} onClick={() => encendido ('Amarillo')}></div>
      <div className={`verde ${Verde ? 'encendido' : ''}`}onClick={() => encendido ('Verde')}></div>
    </div>
  );
}

export default Semaforo;
