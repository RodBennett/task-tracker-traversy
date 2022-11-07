import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "jan 25, 2022",
      reminder: false,
  },
  {
      id: 2,
      text: "Gym",
      day: "Feb 23, 2022",
      reminder: false,

  },
  {
      id: 3,
      text: "Go to school",
      day: "Sept. 23",
      reminder: false,
  },
  ])

  // add task function
  const addTask = (task) => {
    // create random number for new task id
    const id = Math.floor(Math.random() * 
    10000) + 1
    
    // create variable for newTask, which takes in random id and the spread operator for task (...task) to includes all proerties of task 
    const newTask = { id, ...task }
    setTasks([ ...tasks, newTask ])
    console.log(newTask)
  }
  //delete task function
  const deleteTask = (id) => {
    console.log("delete", id)
    // this line says show all the tasks that are NOT equal to the id we've selected. Use Set Tasks for any changing states.
   setTasks(tasks.filter((task) => task.id !==id))
  }

  // Toggle reminder function
  const toggleReminder = (id) => {

    // maps tasks
    setTasks(tasks.map((task) => 
    // ternary conditional
    task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <AddTask onAdd={addTask} />
      {/* <Tasks tasks={tasks} onDelete={deleteTask}/> */}
      {/* if there are no tasks, create a ternary method to say "no tasks": */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
        ) : ('No tasks to show' 
      )}
    </div>
  )
}

export default App
