import { useEffect, useState } from "react";

const TaskCreator = ({ taskItems, setTaskItems, createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setNewTaskName('')
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')

    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          placeholder='Enter a new task'
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button onClick={() => createNewTask(newTaskName)} className="btn btn-primary btn-sm">Save Task</button>
      </div>
    </form>
  )
}

export default TaskCreator