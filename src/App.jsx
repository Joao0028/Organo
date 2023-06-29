import { useState } from 'react';
import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario/Formulario';
import Time from './Componentes/Time/Time';
import Card from './Componentes/Card/Card';
import Rodape from './Componentes/Rodape/Rodape';


function App() {

  const times = [ 
    {
      nome:"Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome:"Front End",
      corPrimaria: "#82CffA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome:"Data Science",
      corPrimaria: "#a6d157",
      corSecundaria: "#F0f8e2"
    },
    {
      nome:"DevOps",
      corPrimaria: "#ed6869",
      corSecundaria: "#fde7e8"
    },
    {
      nome:"Ux e Design",
      corPrimaria: "#Db6ebf",
      corSecundaria: "#fae9f5"
    },
    {
      nome:"Mobile",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9"
    },
    {
      nome:"Inovação e gestão",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf"
    }
  ]
  

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario time={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
      key={time.nome} 
      NomeDoTime={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      corDois={time.corPrimaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.Time === time.nome)}
      />)}
      
      <Rodape/>
    </div>
  );
}

export default App;