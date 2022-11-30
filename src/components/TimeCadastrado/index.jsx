import './TimeCadastrado.css'

const TimeCadastrado = ({name, cargo, setor}) => {

    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{cargo}</td>
                <td>{setor}</td>
            </tr>
        </tbody>
    )
}

export default TimeCadastrado;