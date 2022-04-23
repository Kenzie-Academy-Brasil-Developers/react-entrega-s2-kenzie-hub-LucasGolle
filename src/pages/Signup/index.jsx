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
import api from "../../services/api";

export const Signup = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo 6 dígitos")
      .required("Campo obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório!"),
    course_module: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!"),
    bio: yup.string().required("Campo obrigatório!"), 
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

    const onSubmitFunction = ({ name, email, password, course_module, contact, bio }) => {
      const user = { name, email, password, course_module, contact, bio }

      api.post("users", user).then((response) => {
        toast.success("Conta criada com sucesso");
        console.log(response)
        return history.push('/');
      })
      .catch((err) => toast.error("Erro ao criar a conta, verifique todos os campos"));

    };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
          <NavBar>
            <img src={logo} alt="logo" className="imgLogo"></img>
            <Link to="/">Voltar</Link>
          </NavBar>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
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
            <Input
              register={register}
              name="contact"
              icon={FiMail}
              lable="Contato Ex: rede social"
              type="text"
              placeholder="Digite o seu contato"
              error={errors.contact?.message}
            />
            <Input
              register={register}
              name="bio"
              icon={FiMail}
              lable="Bio"
              type="text"
              placeholder="Digite um pouco sobre você"
              error={errors.bio?.message}
            />
            <ContainerSelect>
            <label>Selecionar módulo</label>
            <select
            {...register("course_module")}
            type="select"
            >
              <option>Módulo 1 - Introdução ao Frontend</option>
              <option>Módulo 2 - Frontend Avançado</option>
              <option>Módulo 3 - Introdução ao Backend</option>
              <option>Módulo 4 - Backend Avançado</option>
            </select>
            </ContainerSelect>
            <Button type="submit">Cadastrar</Button>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
