import { Link } from "react-router-dom";
import {
  Button,
  AnimationContainer,
  Background,
  Container,
  Content,
  NavBar,
  ContainerSelect,
} from "./styles";
import Input from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
import logo from "../../assets/Logo.png";

export const Signup = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo 8 dígitos")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  //   const onSubmitFunction = ({ name, email, password }) => {
  //     const user = { name, email, password }

  //     api.post("/user/register", user).then((_) => {
  //       toast.success("Conta criada com sucesso");
  //       return history.push('/login');
  //     })
  //     .catch((err) => toast.error("Erro ao criar a conta, verifique todos os campos"));

  //   };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Background />
      <Content>
          <NavBar>
            <img src={logo} alt="logo" className="imgLogo"></img>
            <button>Voltar</button>
          </NavBar>
        <AnimationContainer>
          <form onSubmit={handleSubmit()}>
            <h2>Crie sua conta</h2>
            <p>Rápido e grátis, vamos nessa</p>
            <Input
              register={register}
              name="name"
              icon={FiUser}
              lable="Nome"
              placeholder="Digite seu nome aqui"
              error={errors.name?.message}
            />
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
            <Input
              register={register}
              name="passwordConfirm"
              icon={FiLock}
              lable="Confirmar senha"
              type="password"
              placeholder="Digite novamente sua senha"
              error={errors.passwordConfirm?.message}
            />
            <ContainerSelect>
            <label>Selecionar módulo</label>
            <select>
              <option>Primeiro Módulo</option>
              <option>Segundo Módulo</option>
              <option>Terceiro Módulo</option>
              <option>Quarto Módulo</option>
            </select>
            </ContainerSelect>
            <Button type="submit">Cadastrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
