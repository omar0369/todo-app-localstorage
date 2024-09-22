import { useState } from 'react';
import './App.css'
import TaskCreator from './components/TaskCreator';
import TaskItems from './components/TaskItems';
import TaskButtonShow from './components/TaskButtonShow.';

function App() {
  const [taskItems, setTaskItems] = useState('')
  const [showCompleted, setShowCompleted] = useState(false)

  const createNewTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    }

    setTaskItems([...taskItems, newTask])
  }

  const toggleTask = (task) => {
    setTaskItems(taskItems.map(item => item.id === task.id ? { ...item, completed: !item.completed } : item))
  }

  return (
    <main className='bg-dark vh-100 text-white'>
      <div className='container p-4 col-md-4 offset-md-4'>
        <TaskCreator taskItems={taskItems} setTaskItems={setTaskItems} createNewTask={createNewTask} />
        <TaskItems taskItems={taskItems} toggleTask={toggleTask} showCompleted={false} />
        <TaskButtonShow showCompleted={showCompleted} setShowCompleted={setShowCompleted} taskItems={taskItems} setTaskItems={setTaskItems} />
        {
          showCompleted && <TaskItems taskItems={taskItems} toggleTask={toggleTask} showCompleted={true} />
        }
      </div>
    </main>
  )
}

export default App; 