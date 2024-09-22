import TaskRow from "./TaskRow"

const TaskItems = ({ taskItems, toggleTask, showCompleted }) => {
  const taskTableRows = (doneValue) => {
    return (
      taskItems
        ? taskItems
          .filter(item => item.completed === doneValue) 
          .map(item => <TaskRow key={item.id} task={item} toggleTask={toggleTask} />)
        : <tr>
          <td>Sin Datos</td>
        </tr>
    )
  }

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {
          taskTableRows(showCompleted)
        }
      </tbody>
    </table>
  )
}

export default TaskItems