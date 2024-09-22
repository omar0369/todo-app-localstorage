const TaskButtonShow = ({ showCompleted, setShowCompleted, taskItems, setTaskItems }) => {
  const handleClear = () => {
    const newTasks = taskItems.filter(item => item.completed === false)
    setTaskItems(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  return (
    <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          name="showCompleted"
          id="showCompleted"
          onChange={() => setShowCompleted(!showCompleted)}
        />
        <label>Show Task Done</label>
      </div>
      <button onClick={handleClear} className='btn btn-danger btn-sm'>Clear</button>
    </div>
  )
}

export default TaskButtonShow