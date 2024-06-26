import styled from "styled-components";
import Background from "../../assets/login-background-new.png";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("${Background}");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginLeftImage = styled.img`
  width: 60vh;
  height: 800px;
  object-fit: cover;
`;
export const ContainerItens = styled.div`
  background-color: #373737;
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
  border-radius: 0 10px 10px 0;
  width: 520px;
  height: 800px;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-style: normal;
    width: 70px;
    height: 24px;
    font-weight: 500;
    font-size: 2rem;
    line-height: 28px;
    color: #ffffff;
    align-self: center;
    margin-top: 75px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;
export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 14px;
  color: #ffffff;
  margin-top: 28px;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  background: #ffffff;
  border-radius: 5px;
  width: 390px;
  height: 38px;
  box-shadow: 3px 3px 10px #4a90e230;
  border: ${(props) => (props.error ? "4px solid #ffde59" : "none")};
  padding-left: 10px;
`;

export const ErrorMessageP = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 20px;
  color: #ffde59;
  margin-top: 5px;
  margin-bottom: 0px;
  text-align: center;
`;
export const SignIN = styled.p`
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 16px;
  color: #ffffff;
  a {
    cursor: pointer;
    font-size: 1.1rem;
  }
  a:hover {
    color: #ffde59;
    text-decoration: underline;
  }
`;
