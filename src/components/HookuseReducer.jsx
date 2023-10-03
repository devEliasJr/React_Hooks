import { useReducer, useState } from "react";

const HookuseReducer = () => {
  // 1 - Começando com useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // Avançando no useReducer
  
  //Definindo Parametros do useReducer

  //Definição da variavel para setar o texto da task
  const [taskText, setTaskText] = useState("");

  //action - Definindo o estado inicial - Comumente usado um Object
  const initialTasks = [
    { id: 1, text: "Algo a fazer" },
    { id: 2, text: "Mais algo a fazer" },
  ];

  //state - Vai coordenar a atualização do reducer
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };
        setTaskText("");
        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  // Definição do Hook - userReducer
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  //Função handle para adicionar tasks
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: "ADD" });
  };

  //Função para remover task - todo: fix: bug removendo todas tasks
  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };

  return (
    <>
      <h2>HookuseReducer</h2>
      <p>Number: {number}</p>
      <button onClick={dispatch}>Alterar Numero</button>
      <span className="separator"></span>
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setTaskText(e.target.value);
          }}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li
          key={task.id}
        >
          {task.id}
          {task.text}
          <input type="submit" onClick={() => {removeTask(task.id)}} value="x" />
        </li>
      ))}
      <span className="separator"></span>
    </>
  );
};

export default HookuseReducer;
