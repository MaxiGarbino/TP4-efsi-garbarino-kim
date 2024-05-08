
import Titulo from './components/Titulo/Titulo.js';
import Formulario from './components/Formulario/Formulario.js';
import Cita from './components/Cita/Cita.js'
import './App.css';
import { useState } from 'react';


function App() {
  const [citas,setCitas] = useState([]);
  setCitas([
    {
      Mascota: "Nina",
      Dueño:"Martin",
      Fecha:"2021-08-05",
      Hora:"8:20",
      Sintomas:"Le duele la pierna"
    },
    {
      Mascota: "Sifon",
      Dueño:"Flecha",
      Fecha:"2023-08-05",
      Hora:"09:24",
      Sintomas:"Duerme mucho"
    },
    {
      Mascota: "Floki",
      Dueño:"Ari",
      Fecha:"2023-08-05",
      Hora:"16:15",
      Sintomas:"No esta comiendo"
    }
  ])

  return (
    <>
      {<Titulo/>}
      <div class="container">
        <div class="row">
        <Formulario citas={citas} setCitas={setCitas}></Formulario>
        <Cita citas={citas} setCitas={setCitas}></Cita>
        </div>
      </div>
    </>
  );
}

export default App;
