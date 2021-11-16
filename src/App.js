import { Container, Typography } from '@material-ui/core';
import './App.css';
import Formulario from './components/Form/Form';
import 'fontsource-roboto'
import { validarCPF, validarSenha } from "./models/cadastro"
import ValidacoesCadastro from './context/ValidacoesCadastro';

function App() {
  return (
    <Container component="article" maxWidth="md">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha }}
      >
        <Formulario aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container >
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}


export default App;
