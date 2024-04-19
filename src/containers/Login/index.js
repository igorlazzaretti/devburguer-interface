import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
// Toastify vai ficar dentro do const response
import { toast } from 'react-toastify';

import Button from '../../componets/Button'
import LoginImg from '../../assets/login-2ham-img.svg'
import LogoImg from '../../assets/login-logo-devburguer.png'
//Context
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'

import {
  Container,
  LoginLeftImage,
  ContainerItens,
  Label,
  Input,
  ErrorMessageP,
  SignIN,
} from './styles'

function Login() {

  const { putUserData } = useUser()

 // console.log('CL do Login userData', userData)

  const schema = Yup.object({
    email: Yup.string()
      .email(
        'Você, provavelmente, não digitou um email válido. Seu hamburguer está esperando!'
      )
      .required(
        'Email necessário para logar e fazer seu pedido na melhor Hamburgueria Dev do MUNDO!'
      ),
    password: Yup.string()
      .min(
        6,
        'Digite pelo menos 6 dígitos. Peça pelo menos 6 Hamburgueres!( essa última parte é brincadeira )'
      )
      .required(
        'Você está quase lá. Digite sua senha e peça logo uma Coquinha Gelada!'
      ),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
    }),
    { pending: 'Verificando seus dados ⏳',
      success: 'Seja bem-vindo(a) 🎉',
      error: 'Vish! Não deu certo. Verifique email e senha 💔'
    }
  ) 
      putUserData(data)
     // console.log('console.log userData', userData)
     // console.log('console.log data',data)
  }

  return (
    <Container>
      <LoginLeftImage src={LoginImg} alt="loginLeftImage2Ham" />
      <ContainerItens>
        <img src={LogoImg} alt="MainLogo" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            placeholder="Digite seu Email aqui"
            error={errors.email?.message}
          />
          <ErrorMessageP>{errors.email?.message}</ErrorMessageP>
          <Label>Senha</Label>
          <Input 
            type="password"
            {...register('password')}
            placeholder="Digite sua Senha. Mínimo 6 caracteres"
            error={errors.password?.message}
          />
          <ErrorMessageP>{errors.password?.message}</ErrorMessageP>

          <Button type="submit">
            Entrar  </Button>

        </form>
        <SignIN  >
          Não possui cadastro? <a>Cadastre-se Aqui</a>
        </SignIN>
      </ContainerItens>
    </Container>
  )
}
export default Login
