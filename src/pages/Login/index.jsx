import { Link } from "react-router-dom";
import {
  Button,
  AnimationContainer,
  Background,
  Container,
  Content,
  NavBar,
  LinkSignup,
  DivInput,
} from "./styles";
import Input from "../../components/Input";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useState } from "react";

export const Login = ({authenticated, setAuthenticated}) => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo 6 dígitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [type, setType] = useState("password");

  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  const history = useHistory()

  const onSubmitFunction = (data) => {
    
    api.post("sessions", data).then(response =>{

        const { token, user } = response.data;

        toast.success("Login feito com sucesso")

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token))

        localStorage.setItem("user", JSON.stringify(user))

        setAuthenticated(true)

        return history.push("/dashboard")

    }).catch(err => toast.error("Confira todos os campos. Ou cadastre-se"))

  };


  if (authenticated){
    console.log(true)
    // return <Redirect to="/dashboard"/>;
  }


  return (
    <Container>
      <Background />
      <Content>
          <NavBar>
            <img src={logo} alt="logo" className="imgLogo"></img>
          </NavBar>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Login</h2>
            <Input
              register={register}
              name="email"
              icon={FiMail}
              lable="Email"
              placeholder="Digite aqui seu email"
              error={errors.email?.message}
            />  
            <DivInput>      
            <Input
              register={register}
              name="password"
              icon={FiLock}
              lable="Senha"
              placeholder="Digite aqui sua senha"
              type={type}
              error={errors.password?.message}
            />
            {type === "password" ? (
              <FiEye
                style={{
                  marginLeft: "115px",
                  marginTop: "-40px",
                  position: "absolute",
                  color: "white",
                  cursor: "pointer",
                }}
                size="1.4em"
                onClick={showPassword}
              />
            ) : (
              <FiEyeOff
                style={{
                  marginLeft: "115px",
                  marginTop: "-40px",
                  position: "absolute",
                  color: "white",
                  cursor: "pointer",
                }}
                size="1.4em"
                onClick={showPassword}
              />
            )}
            </DivInput>
            <Button type="submit">Entrar</Button>
            <p>Ainda não possui uma conta?</p>
            <LinkSignup>
            <Link to="/signup">Cadastrar-se</Link>
            </LinkSignup>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
