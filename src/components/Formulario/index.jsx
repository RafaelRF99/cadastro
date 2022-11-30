import './Formulario.css'

import { useState } from 'react'

import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';

const Formulario = (props) => {
    const [name, setName] = useState('');
    const [cargo, setCargo] = useState('');
    const [setor, setSetor] = useState('');

    const salvar = (e) => {
        e.preventDefault();
        props.usuarioCadastrado({
            name,
            cargo,
            setor
        })
    }

    const lista = [
        ` `,
        `FrontEnd`,
        `BackEnd`,
        `FullStack`,
    ]

    return (
        <section className='container-form'>
            <form onSubmit={salvar}>
                <h1 className='title'>Tela de Cadastro</h1>
                <CampoTexto label="Nome" valor={name} alterado={valor => setName(valor)} />
                <CampoTexto label="Cargo" valor={cargo} alterado={valor => setCargo(valor)} />
                <ListaSuspensa lista={lista} valor={setor} alterado={valor => setSetor(valor)} />
                <button className='botao-form'>Enviar</button>
            </form>
        </section>
    )
}

export default Formulario;