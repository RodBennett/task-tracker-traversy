import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


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

  //delete task
  const deleteTask = (id) => {
    console.log("delete", id)
    // this line says show all the tasks that are NOT equal to the id we've selected
   setTasks(tasks.filter((task) => task.id !==id))
  }

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      {/* <Tasks tasks={tasks} onDelete={deleteTask}/> */}
      {/* if there are no tasks, create a ternary method to say "no tasks": */}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} /> 
        ) : ('No tasks to show' 
      )}
    </div>
  )
}

export default App
