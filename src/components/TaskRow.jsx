const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.title}
        <input
          type="checkbox"
          name="taskDone"
          id="taskDone"
          checked={task.completed}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  )
}

export default TaskRow