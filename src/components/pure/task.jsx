import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task, complete, remove }) => {

  useEffect(() => {
    console.log('Created Task');

    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    }
  }, [task])

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-primary'>
              {task.level}
            </span>
          </h6>)

      case LEVELS.URGENT:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>
              {task.level}
            </span>
          </h6>)

      case LEVELS.BLOCKING:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>
              {task.level}
            </span>
          </h6>)

      default:
        break;
    }
  }

  function getTaskIcon(task) {

    return task.completed ?
      (<i onClick={() => complete(task)} className='task-action bi-toggle-on' style={{ color: 'green', fontWeight: 'bold' }}></i>)
      :
      (<i onClick={() => complete(task)} className='task-action bi-toggle-off'></i>);
  }

  return (

    <tr className='fw-normal'>

      <th>
        <span className='ms-2'>{task.name}</span>
      </th>

      <td className='align-middle'>
        <span>{task.description}</span>
      </td>

      <td className='align-middle'>
        <span>{taskLevelBadge()}</span>
      </td>

      <td className='align-middle'>

        {getTaskIcon(task)}

        <i onClick={() => remove(task)} className='task-action bi-trash' style={{ color: 'tomato' }}></i>
      </td>

    </tr>

  );
};


TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};


export default TaskComponent;


