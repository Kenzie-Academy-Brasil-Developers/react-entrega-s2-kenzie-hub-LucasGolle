import logo from "../../assets/Logo.png";
import { Button } from "../../components/Button";
import {
  Header,
  Container,
  UserStats,
  UserSkills,
  SelectSkills,
} from "./styles";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import Card from "../../components/Cards";

export const Dashboard = ({ authenticated }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  const [skills, setSkills] = useState([]);

  const [popup, setPopup] = useState(false);

  const onOffPopup = () => {
    setPopup(!popup);
  };

  const loadSkills = () => {
    api
      .get("/skills", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setSkills(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const onSubmit = ({ skill }) => {
    if (!skill) {
      return toast.error("Complete o campo obrigatório");
    }
    api.post(
      "users/techs",
      {
        title: skill,
        status: skill,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => loadSkills())
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <Header>
          <img src={logo} alt="logo" className="imgLogo"></img>
          <Button />
        </Header>
        <UserStats>
          <h1>Olá, {user.name}</h1>
          <p>{user.course_module}</p>
        </UserStats>
        <UserSkills>
          <h2>Tecnologias</h2>
          <button onClick={onOffPopup}>+</button>
        </UserSkills>
        {popup && (
          <SelectSkills onSubmit={handleSubmit(onSubmit)>
            <div>
              <h2>Cadastrar Tecnolodia</h2>
              <span onClick={onOffPopup}>x</span>
            </div>
            <label>Nome</label>
            <input
              name="title"
              placeholder="Digite aqui sua tecnologia"
              type="text"
            ></input>
            <label>Selecionar status</label>
            <select>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            <button>Cadastrar Tecnologia</button>
          </SelectSkills>
        )}
        {skills.map((skill) => (
          <Card
            onSubmit={() => onSubmit()}
            key={skill.id}
            title={skill.title}
            status={skill.status}
            onClick={() => {}}
          />
        ))}
      </Container>
    </>
  );
};
