import React from 'react';

export default ({ task, toggleDone }) => (
  <tr>
    <td>
      <input type="checkbox" checked={task.done} onChange={() => {
        console.log('check', task)
        toggleDone(task.id)
      }} />
    </td>
    <td>
        {task.title}
    </td>
    <td>
        {task.priority}
    </td>
    <td>
        {task.date}
    </td>
  </tr>
)