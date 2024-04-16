import React from "react";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
    } = useForm()


  return (
    <Container>
      <LoginLeftImage src={LoginImg} alt="loginLeftImage2Ham" />
      <ContainerItens>
        <img src={LogoImg} alt="MainLogo" />
        <h1>Login</h1>
        <form>
        <Label>Email</Label>
        <Input placeholder="Digite seu Email aqui" />
        <Label>Senha</Label>
        <Input placeholder="Digite sua Senha. Mínimo 6 caracteres" />
        <Button>Entrar</Button>
        </form>
        <SignIN>
          Não possui cadastro? <a>Cadastre-se Aqui</a>
        </SignIN>
      </ContainerItens>
    </Container>
  );
}
export default Login;
