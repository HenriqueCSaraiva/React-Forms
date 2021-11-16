import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hooks/useErros';


function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ nome, sobrenome, cpf, novidades, promocoes })
            }
        }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                name="nome"
                id='nome'
                label="Nome"
                variant="outlined"
                fullWidth
                margin='normal'
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
                name="sobrenome"
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin='normal'
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                name='cpf'
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin='normal'
            />

            <FormControlLabel
                label="Promoções"
                control={<Switch onChange={(event) => {
                    setPromocoes(event.target.checked)
                }}
                    name="promocoes" color="primary" defaultChecked={promocoes} />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch onChange={(event) => {
                    setNovidades(event.target.checked)
                }}
                    name="novidades" color="primary" defaultChecked={novidades} />
                }
            />

            <Button variant="contained" color="primary" type="submit">Próximo</Button>
        </form>
    )
}

export default DadosPessoais;