import React from 'react';
import {Todolist} from "./components/Todolist";

let tasks: Array<TaskType> = [
  {id: 1, title: "HTML&CSS", isDone: true, priority: "high"},
  {id: 2, title: "JS", isDone: true, priority: "low"},
  {id: 3, title: "ReactJS", isDone: false, priority: "middle"},
  {id: 4, title: "HTML&CSS1", isDone: true, priority: "middle"},
  {id: 5, title: "JS1", isDone: true, priority: "high"},
  {id: 6, title: "ReactJS1", isDone: false, priority: "low"}
]

export type TaskType = {
  id: number
  title: string
  isDone: boolean
  priority: "all" | FilterType
}

export type FilterType = "all" | TaskPriorityType

export type TaskPriorityType = "low" | "middle" | "high"

function App() {
  return (
    <div className="App">
      <Todolist name={"Todolist"} tasks={tasks} />
    </div>
  );
}

export default App;
