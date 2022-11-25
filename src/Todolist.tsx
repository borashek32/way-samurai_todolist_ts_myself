import {FilterValueType} from "./App";
import {ChangeEvent, useState} from "react";
import {Button} from "./components/Button";

type TodolistType = {
  title: string
  tasks: Array<TaskType>
  changeFilter: (filter: FilterValueType) => void
  removeTask: (id: string) => void
  addTask: (title: string) => void
}
export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

export const Todolist = (props: TodolistType) => {
  const mappedTasks = props.tasks.map((t, index) => {
    const onClickHandler = () => {
      props.removeTask(t.id)
    }
    return (
      <li key={t.id}>
        {t.title}
        <input type="checkbox" checked={t.isDone} />
        <button onClick={onClickHandler}>x</button>
      </li>
    )
  })
  let [title, setTitle] = useState<string>("")
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    title = e.currentTarget.value
  }
  const addTaskHandler = () => {
    props.addTask(title)
    setTitle(title)
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <input type="text" onChange={onChangeInputHandler} />
        <button onClick={addTaskHandler}>+</button>
      </div>
      <ul>
        {mappedTasks}
      </ul>
      <div>
        <button onClick={() => props.changeFilter('all')}>All</button>
        <button onClick={() => props.changeFilter('active')}>Active</button>
        {/*<button onClick={() => props.changeFilter('completed')}>Completed</button>*/}
        <Button name={"Completed"} callback={() => props.changeFilter('completed')} />
      </div>
    </div>
  )
}