import logo from "../../assets/Logo.png";
import { Button } from "../../components/Button";
import {Header} from "./styles"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

export const Dashboard = ({ authenticated }) =>{
    const [tasks, setTasks] = useState([]);
    const [token] = useState(
      JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
    );
    const { register, handleSubmit } = useForm();
  
    function loadTasks() {
      api
        .get("/task", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            completed: false,
          },
        })
        .then((response) => {
          const apiTasks = response.data.data.map((task) => ({
            ...task,
            createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }),
          }));
          setTasks(apiTasks);
        })
        .catch((err) => console.log(err));
    }
  
    useEffect(() => {
      loadTasks();
    }, []);
  
    const onSubmit = ({ task }) => {
      if (!task) {
        return toast.error("Complete o campo para enviar uma tarefa");
      }
  
      api
        .post(
          "/task",
          {
            description: task,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => loadTasks());
    };
  
    const handleCompleted = (id) => {
      const newTasks = tasks.filter((task) => task._id !== id);
  
      api
        .put(
          `/task/${id}`,
          { completed: true },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => setTasks(newTasks));
    };
  
    if (!authenticated) {
      return <Redirect to="/login" />;
    }


    return (
        <Header>
        <img src={logo} alt="logo" className="imgLogo"></img>
        <Button/>
        </Header>
    )
}