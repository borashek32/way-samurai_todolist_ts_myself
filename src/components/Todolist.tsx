import {TaskType} from "../App";
// @ts-ignore
import styled from "styled-components";

export type TodolistType = {
    name: string
    tasks: Array<TaskType>
}

const Wrapper = styled.div`
  font-size: 24px;
  text-align: left;
  padding: 20px;
  color: darkgrey;
  width: 200px;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const List = styled.p`
  list-style: none;
  font-size: 16px;
  margin-right: 20px;
`
const TaskTitle = styled.p`
  text-align: left;
`
const Task = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
`
const Button = styled.button`
  width: 30px;
  height: 30px;
`

export const Todolist = (props: TodolistType) => {
    return (
        <Wrapper>
            <Title>{props.name}</Title>
            <List>
                {props.tasks.map(task => {
                    return (
                        <Task>
                            <input type="checkbox" checked={task.isDone}/>
                            <TaskTitle>{task.title}</TaskTitle>
                            <Button>x</Button>
                        </Task>
                    )
                })}
            </List>
        </Wrapper>
    )
}