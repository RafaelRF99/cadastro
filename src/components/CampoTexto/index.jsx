import './CampoTexto.css'

const CampoTexto = (props) => {

    const digitado = (e) => {
        props.alterado(e.target.value);
    }

    return (
        <section className="container-campo">
            <label>{props.label}</label>
            <input type="text" onChange={digitado} value={props.valor}/>
        </section>
    )
}

export default CampoTexto;