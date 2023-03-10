import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskList = () => {

    const defaultTask1 = new Task('Example 1', 'Some Desc 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example 2', 'Some Desc 2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example 3', 'Some Desc 3', false, LEVELS.BLOCKING)

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task state has been modified');

        setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => {
            console.log('Unmounting task component');
        };

    }, [tasks]);


    const changeState = (id) => {
        console.log('TODO: cambiar estado de una tarea')
    }

    function completeTask(task) {
        console.log('Complete this Task:', task)
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        tempTask[index].completed = !tempTask[index].completed
        setTasks(tempTask)
    }

    function removeTask(task) {
        console.log('Deleting this Task:', task)
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        tempTask.splice(index, 1)
        setTasks(tempTask)
    }

    function addTask(task) {
        console.log('Complete this Task:', task)
        const tempTask = [...tasks]
        tempTask.push(task)
        setTasks(tempTask)
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent
                                task={task}
                                key={index}
                                complete={completeTask}
                                remove={removeTask}
                            />)
                    })}
                </tbody>
            </table>
        )
    }

    let tasksTable = <Table />

    if (tasks.length > 0) {
        tasksTable = <Table />
    } else {
        tasksTable = <h3>There are no tasks</h3>
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your tasks:
                        </h5>
                    </div>
                    <div className='card-body' data-mbd-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : (tasksTable)}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} tasksNumber={tasks.length}></TaskForm>
        </div>
    );
}

export default TaskList;