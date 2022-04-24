import logo from "../../assets/Logo.png";
import { Button } from "../../components/Button";
import {Header, Container, UserStats, UserSkills, SelectSkills} from "./styles"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import Input from "../../components/Input"

export const Dashboard = ({ authenticated }) =>{
    const [token] = useState(
      JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
    );

    const [ user ] = useState(

      JSON.parse(localStorage.getItem("user")) 
    )

    console.log(token)

   const [popup, setPopup] = useState(true)

   const onOffPopup = () =>{
     setPopup(!popup)
   }
  
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
        <UserStats>
        <h1>Olá, {user.name}</h1>
        <p>{user.course_module}</p>
        </UserStats>
        <UserSkills>
          <h2>Tecnologias</h2>
          <button>+</button>
        </UserSkills>
        {popup && <SelectSkills>
          <div>
          <h2>Cadastrar Tecnolodia</h2>
          <span>x</span>
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
          </SelectSkills>}
        </Container>
        </>
    )
}