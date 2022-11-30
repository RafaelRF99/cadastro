import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const digitado = (e) => {   
        props.alterado(e.target.value);
    }

    return (
        <div className="container-lista">
            <label>Setor:</label>
            <select onChange={digitado}>
                {props.lista.map(lista => <option key={lista}>{lista}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;