import './Card.css'

function Card({ Imagem, Nome , Time ,  corDeFundo }){
    return (
        <div  className='colaborador'>
            <div  className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={Imagem} alt={Nome} />
            </div>
            <div className='rodape'>
                <h4 style={{color: corDeFundo}}>{Nome}</h4>
                <h5>{Time}</h5>
            </div>
        </div>
    )
}

export default Card