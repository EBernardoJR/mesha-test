import React, {useState, useContext} from 'react';
import { PrimaryButton, SecondaryButton } from '../../components/Buttons';
import TextInput from '../../components/TextInput';
import Select from 'react-select';
import { Container, Form, InputsContainer } from './styles';
import { login } from '../../services/login/index';
import { useNavigate } from "react-router-dom";
import UserContext from '../../services/context/userContext';

enum Types {
  login = 'login',
  register = 'register',
}

const optionsUser = [
  { value: 'client', label: 'Cliente' },
  { value: 'arch', label: 'Arquiteto' },
]

const optionsGender = [
  { value: 'male', label: 'Masculino' },
  { value: 'female', label: 'Feminino' },
]

export default function Login() {
  const [type, setType] = useState<Types>(Types.login)
  const [loginData, setLogin] = useState<{
    password?: string  | undefined,
    email?: string | undefined
  }>()
  const { user, handleUser } = useContext(UserContext)
  const navigate = useNavigate()
  function handleLogin() {
    login({
      password: loginData?.password,
      email: loginData?.email
    }).then(data => {
      console.log(data)
      if (data) {
      handleUser(data.user);
      navigate('/home')
      } else {
        alert('Ocorreu um erro ao fazer o login')
      }
    }).catch((e) => {
      console.log(e)
    })
  }
  return (
    <Container>
      {
        type === Types.login ? 
        <>
            <Form>
            <InputsContainer>
              <TextInput placeholder='E-mail' initialValue={loginData?.email} onChange={(value) => setLogin({...loginData, email: value})}/>
              <TextInput placeholder='Senha' initialValue={loginData?.password} hideValue onChange={(value) => setLogin({...loginData, password: value})} />
            </InputsContainer>
            
            <PrimaryButton onClick={handleLogin}>
              Entrar
            </PrimaryButton>
            <span>Ou</span>
            <SecondaryButton  onClick={() => setType(Types.register)}>
              Cadastrar-se
            </SecondaryButton>
          </Form>
        </> : 
        <>
          <Form>
          <InputsContainer>
            <TextInput placeholder='E-mail'/>
            <TextInput placeholder='Senha' hideValue />
            <TextInput placeholder='Nome'/>
            <TextInput placeholder='Telefone'/>
            <TextInput placeholder='Idade'/>
            <label htmlFor="select-type" id='label-select'>Tipo de conta</label>
            <Select styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: '#666',
                borderRadius: 20,
                marginTop: 6
              }),
            }} id='select-type' placeholder='Selecionar' options={optionsUser} />

            <label htmlFor="select-gender" id='label-select'>Gênero</label>
            <Select styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: '#666',
                borderRadius: 20,
                marginTop: 6
              }),
            }} id='select-gender' placeholder='Selecionar' options={optionsGender} />
          </InputsContainer>
          
          <PrimaryButton>
            Cadastrar-se
          </PrimaryButton>
          <span>Já é cadastrado?</span>
          <SecondaryButton onClick={() => setType(Types.login)}>
            Voltar
          </SecondaryButton>
        </Form>
        </>
      }
    </Container>
  );
}
