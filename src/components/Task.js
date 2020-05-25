import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'

export const Task = ({task}) => {
    const {removeTask} = useContext (TaskListContext)


    return (
        <li className='list-item'>
            <span>{task.title}</span>
            <div>
                <button onClick={()=>removeTask(task.id)} className='btn-delete task-btn'>
                    <i className='fas fa-trash-alt'>Deletar</i>
                </button>      
                <button className='btn-edit task-btn'>
                    <i className='fas fa-pen'>Editar</i>
                </button>
            </div>
        </li>
    )
}

export default Task;