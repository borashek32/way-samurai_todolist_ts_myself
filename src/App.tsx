import React, {useState} from 'react';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValueType = "all" | "active" | "completed"

function App() {
  const [tasks, setTasks] = useState([
    {id: v1(), title: "react", isDone: false},
    {id: v1(), title: "html", isDone: false},
    {id: v1(), title: "css", isDone: true},
    {id: v1(), title: "php", isDone: false},
    {id: v1(), title: "sql", isDone: true},
    {id: v1(), title: "node", isDone: true}
  ])

  // filters
  const [filter, setFilter] = useState<FilterValueType>("all")
  const changeFilter = (filterValue: FilterValueType) => {
    setFilter(filterValue)
    // console.log(filterValue)
  }
  let filteredTasks: Array<TaskType> = tasks
  if (filter === "active") {
    filteredTasks = tasks.filter(t => !t.isDone)
  }
  if (filter === "completed") {
    filteredTasks = tasks.filter(t => t.isDone)
  }

  // delete task
  const removeTask = (id: string) => {
    let filteredTasks = tasks.filter(t => t.id !== id)
    setTasks(filteredTasks)
  }

  // add task
  const addTask = (title: string) => {
    let newTask = {id: v1(), title: title, isDone: false}
    setTasks([newTask, ...tasks])
  }

  return (
    <Todolist
      title={"Tasks"}
      tasks={filteredTasks}
      changeFilter={changeFilter}
      removeTask={removeTask}
      addTask={addTask}
    />
  )
}
export default App