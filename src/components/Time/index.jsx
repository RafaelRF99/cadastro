import TimeCadastrado from '../TimeCadastrado';
import './Time.css'

const Time = (props) => {

    return (
		<section className='container-table'>
			<h1 className='titulo'>Cadastrado</h1>
			<table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Setor</th>
                    </tr>
                </thead>
                {props.usuarios.map(usuario => <TimeCadastrado 
                name={usuario.name} cargo={usuario.cargo} setor={usuario.setor} />)}
            </table>
		</section>
    )
}

export default Time;