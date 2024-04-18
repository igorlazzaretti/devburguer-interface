import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Button from '../../componets/Button'
import api from '../../services/api'
import RegisterImg from '../../assets/register-image.svg'
import LogoImg from '../../assets/login-logo-devburguer.png'
import {
  Container,
  LoginLeftImage,
  ContainerItens,
  Label,
  Input,
  ErrorMessageP,
  SignIN,
} from './styles'

function Register() {
  const schema = Yup.object({
    name: Yup.string().required('Diga seu nome... e a cidade de onde esta falando(na verdade, é só o nome =)'),
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
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Digite a mesma senha')
      .required(
        'Você está quase lá. Digite a mesma senha e peça logo um Drink!'
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
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password,
    })
  }

  return (
    <Container>
      <LoginLeftImage src={RegisterImg} alt="registerLeftImage2Ham" />
      <ContainerItens>
        <img src={LogoImg} alt="MainLogo" />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>

        <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            placeholder="Digite seu Email aqui"
            error={errors.name?.message}
          />
          <ErrorMessageP>{errors.name?.message}</ErrorMessageP>

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

          <Label>Confirme Sua Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            placeholder="Esse campo serve para você não esquecer a sua senha."
            error={errors.confirmPassword?.message}
          />
          <ErrorMessageP>{errors.confirmPassword?.message}</ErrorMessageP>

          <Button type="submit">Cadastrar </Button>
        </form>
        <SignIN>
          Já possui cadastro? <a>Entre Aqui</a>
        </SignIN>
      </ContainerItens>
    </Container>
  )
}
export default Register
