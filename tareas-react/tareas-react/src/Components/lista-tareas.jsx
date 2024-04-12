import React, { useState, useEffect } from 'react';
import './style2.css';

function TaskList() {
    const [tasks, setTasks] = useState(() => {
        const data = localStorage.getItem('tasks');
        return data ? JSON.parse(data) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function addTask(task) {
        if (task) {
            setTasks([...tasks, task]);
        }
    }

    function deleteTask(index) {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    return (
        <div className='task-list-container'>
            <h1>Lista de Tareas</h1>
            <input type="text" placeholder="Añadir nueva tarea" onKeyDown={e => {
                if (e.key === 'Enter' && e.target.value) {
                    addTask(e.target.value);
                    e.target.value = ''; 
                }
            }} />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
