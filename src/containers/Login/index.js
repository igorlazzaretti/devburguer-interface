import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import api from '../../../src/services/api'
import LoginImg from "../../assets/login-2ham-img.svg";
import LogoImg from "../../assets/login-logo-devburguer.png";
import {
  Container,
  LoginLeftImage,
  ContainerItens,
  Label,
  Input,
  ErrorMessageP,
  Button,
  SignIN,
} from "./styles";

function Login() {
  const schema = Yup.object({
    email: Yup.string()
      .email(
        "Você, provavelmente, não digitou um email válido. Seu hamburguer está esperando!"
      )
      .required(
        "Email necessário para logar e fazer seu pedido na melhor Hamburgueria Dev do MUNDO!"
      ),
    password: Yup.string()
      .min(
        6,
        "Digite pelo menos 6 dígitos. Peça pelo menos 6 Hamburgueres!( essa última parte é brincadeira )"
      )
      .required(
        "Você está quase lá. Digite sua senha e peça logo uma Coquinha Gelada!"
      ),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async clientData => {
    const response = await api.post('sessions', {
    email: clientData.email,
    password: clientData.password,  }
  )};

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
            {...register("email")}
            placeholder="Digite seu Email aqui"
            error={errors.email?.message}
          />
          <ErrorMessageP>{errors.email?.message}</ErrorMessageP>
          <Label>Senha</Label>
          <Input
            type="password"
            {...register("password")}
            placeholder="Digite sua Senha. Mínimo 6 caracteres"
            error={errors.password?.message}
          />
          <ErrorMessageP>{errors.password?.message}</ErrorMessageP>
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
