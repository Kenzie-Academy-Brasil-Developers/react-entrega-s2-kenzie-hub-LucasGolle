import logo from "../../assets/Logo.png";
import { Button } from "../../components/Button";
import {
  Header,
  Container,
  UserStats,
  UserSkills,
  SelectSkills,
  SkillsContainer,
  EditSkill,
  ButtonContainer,
  HeaderContainer,
  ButtonRight,
  ButtonLeft,
  Hr,
} from "./styles";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import Card from "../../components/Cards";

export const Dashboard = ({ authenticated }) => {
  
  const {register, handleSubmit} = useForm();
  
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
    );
    
    const [user] = useState(JSON.parse(localStorage.getItem("user")));
    
    const [skills, setSkills] = useState([]);
    
    const [popup, setPopup] = useState(false);

    const [skillEdit, setskillEdit] = useState(false);

    const editFunction = (id) =>{
      setskillEdit(!skillEdit)
    }
    
    const onOffPopup = () => {
      setPopup(!popup);
    };
    
    const loadSkills = () => {
      api.get(`users/${user.id}`).then((response) => setSkills(response.data.techs))

    };
    
    useEffect(() => {
      loadSkills();
    }, []);


    const excludeUpdate = (id) => {
      const newSkill = skills.filter((skill) => skill.id !== id);
  
      api
        .delete(
          `users/techs/:${id}`, 
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ).then((response) => setSkills(newSkill));
    };
    
    const onSubmit = (techs) => {
      if (!techs) {
      return toast.error("Complete o campo obrigatório");
    }

    api
      .post(
        "users/techs",
        techs,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        )
        .then((response) => loadSkills());
      };
      
      
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <Header>
          <img src={logo} alt="logo" className="imgLogo"></img>
          <Button/>
        </Header>
        <Hr/>
        <UserStats>
          <h1>Olá, {user.name}</h1>
          <p>{user.course_module}</p>
        </UserStats>
        <Hr/>
        <UserSkills>
          <h2>Tecnologias</h2>
          <button onClick={onOffPopup}>+</button>
        </UserSkills>
        {popup && (
          <SelectSkills onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h2>Cadastrar Tecnolodia</h2>
              <span onClick={onOffPopup}>x</span>
            </div>
            <label>Nome</label>
            <input
              {...register("title")}
              name="title"
              placeholder="Digite aqui sua tecnologia"
              type="text"
            ></input>
            <label>Selecionar status</label>
            <select
            {...register("status")}
            type="select"
            >
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            <button type="submit">Cadastrar Tecnologia</button>
          </SelectSkills> 
        )}

       {skillEdit && <EditSkill onSubmit={handleSubmit(excludeUpdate())}>
        <HeaderContainer>
              <h2>Tecnologia Detalhes</h2>
              <span onClick={editFunction}>x</span>
            </HeaderContainer>
            <label>Nome</label>
            <input
              {...register("title")}
              name="title"
              placeholder="Digite aqui sua tecnologia"
              type="text"
            ></input>
            <label>Selecionar status</label>
            <select
            {...register("status")}
            type="select"
            >
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            <ButtonContainer>
            <ButtonLeft type="submit">Salvar alterações</ButtonLeft>
            <ButtonRight type="submit">Excluir</ButtonRight>
            </ButtonContainer>
        </EditSkill>}

        <SkillsContainer>
          {skills.map((skill) => (
            <Card key={skill.id} title={skill.title} status={skill.status} onClick={() => editFunction(skill.id)} />
          ))}
        </SkillsContainer>
      </Container>
    </>
  );
};
