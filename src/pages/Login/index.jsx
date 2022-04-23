import { Link } from "react-router-dom";
import {
  Button,
  AnimationContainer,
  Background,
  Container,
  Content,
  NavBar,
} from "./styles";
import Input from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import logo from "../../assets/Logo.png";

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

  const history = useHistory()

  const onSubmitFunction = (data) => {
    
    api.post("sessions", data).then(response =>{

        const { token } = response.data;

        toast.success("Login feito com sucesso")

        localStorage.setItem("@KenzieHub:token", JSON.stringify(token))

        setAuthenticated(true)

        return history.push("/dashboard")

    }).catch(err => toast.error("Confira todos os campos. Ou cadastre-se"))

  };


  if (authenticated){
    return <Redirect to="/dashboard"/>;
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
            <Input
              register={register}
              name="password"
              icon={FiLock}
              lable="Senha"
              placeholder="Digite aqui sua senha"
              type="password"
              error={errors.password?.message}
            />
            <Button type="submit">Entrar</Button>
            <p>Ainda não possui uma conta?</p>
            <Link to="/signup">Cadastrar-se</Link>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
