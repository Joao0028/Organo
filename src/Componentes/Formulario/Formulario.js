import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import Botao from "../Botao/Botao"
import {useState} from 'react'

const Formulario = (props) => {
      function criaCard(e){
            e.preventDefault();

            props.aoColaboradorCadastrado({
                Nome:nome,
                Cargo:cargo,
                Imagem:imagem,
                Time:time
            })
      }


      const [nome, setNome] = useState()
      const [cargo, setCargo] = useState()
      const [imagem, setImagem] = useState()
      const [time, setTime] = useState()

    return (

        <section className="formulario">
            <form onSubmit={criaCard}>

                <h2>Preencha os dados para criar o card.</h2>

                <CampoTexto algoAlterado={valor => setNome(valor)} obrigatorio={true}  label="Nome" onChange={(e)=>setNome(e.target.value)} placeholder="Digite seu nome"/>
                <CampoTexto algoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" onChange={(e)=>setCargo(e.target.value)} placeholder="Digite seu cargo"/>
                <CampoTexto algoAlterado={valor => setImagem(valor)} obrigatorio={true} label="Imagem" onChange={(e)=>setImagem(e.target.value)} placeholder="Informe o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} algoAlterado={(valor) => setTime(valor)} itens={props.time}/>
                <Botao texto="Criar Card"/>
            </form>
        </section>

    )
}

export default Formulario