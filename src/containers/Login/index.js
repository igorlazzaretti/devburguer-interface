import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from 'yup'

import LoginImg from "../../assets/login-2ham-img.svg";
import LogoImg from "../../assets/login-logo-devburguer.png";
import {
  Container,
  LoginLeftImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignIN,
} from "./styles";

function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <LoginLeftImage src={LoginImg} alt="loginLeftImage2Ham" />
      <ContainerItens>
        <img src={LogoImg} alt="MainLogo" />
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email")}
            placeholder="Digite seu Email aqui" />
          <Label>Senha</Label>
          <Input
            type="password"
            {...register("password")}
            placeholder="Digite sua Senha. Mínimo 6 caracteres"
          />
          <Button type="submit">Entrar</Button>
        </form>
        <SignIN>
          Não possui cadastro? <a>Cadastre-se Aqui</a>
        </SignIN>
      </ContainerItens>
    </Container>
  );
}
export default Login;
