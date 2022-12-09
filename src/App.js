import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";

let idAcc = 0;
const genereteId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: genereteId(),
      title,
      state
    };
    setTasks((existingTaks) => {
      return [...existingTaks, newTask];
    });
  };

  const deletTask = (id) => {
    setTasks((existingTask) => {
      return existingTask.filter((task) => task.id === id);
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTaks) => {
      return existingTaks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          taskState="Pendente"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeletTask={deletTask}
        />
        <TaskList
          title="Fazendo"
          taskState="Fazendo"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeletTask={deletTask}
        />
        <TaskList
          title="Completa"
          taskState="Completa"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={updateTask}
          onDeletTask={deletTask}
        />
      </div>
    </div>
  );
}
