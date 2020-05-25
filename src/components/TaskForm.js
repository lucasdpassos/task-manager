import React, { useContext, useState } from 'react'
import { TaskListContext } from '../context/TaxkListContext'

export const TaskForm = () => {
    const {addTask} = useContext(TaskListContext)

    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        addTask(title)
        setTitle('')

    }


    return (
        <form onSubmit={handleSubmit} className='form'>
            <input 
            onChange={handleChange}
            value={title}
            type='text' 
            className='task-input' 
            placeholder='Adicionar Tarefa...'
            required
            />
            <div className='buttons'>
                <button type='submit' className='btn 
                add-task-btn'>
                    Adicionar</button>
                <button className='btn 
                clear-btn'>
                    Limpar</button>
            </div>
        </form>
    )
}

export default TaskForm;