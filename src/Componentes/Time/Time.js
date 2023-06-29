import Card from '../Card/Card'
import './Time.css'

function Time(props){
    return (

      props.colaboradores.length > 0 && <section className='Time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.NomeDoTime}</h3>
            <div className='Card'>
            {props.colaboradores.map( Pessoa => <Card key={Pessoa.Nome} Nome={Pessoa.Nome} Imagem={Pessoa.Imagem} Time={Pessoa.Cargo} corDeFundo={props.corDois}/>)}
            </div>
       </section>
    )
}

export default Time