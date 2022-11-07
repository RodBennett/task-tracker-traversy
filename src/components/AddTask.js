import { useState } from 'react'

// onAdd desctructured parameter from 
const AddTask = ({ onAdd }) => {
    //sets the proerties of tasks ans well as set variables for state changes
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert("Please add a task")
            return
        }
        // sets form back to empty after submit
    onAdd({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder='Add task' 

            // user value set to {text} as in our model array
            value={text} onChange={(e) => 

            // setText used for changing state. New {text} value of user passed as event into onChange(e)
            setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type='text' placeholder='Add day and time' 
            // user value set to {day} as in our model array
            value={day} onChange={(e) => 

            // setDay used for changing state. New {day} value of user passed as event into onChange(e)
            setDay(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label> Set Reminder</label>
            <input type='checkbox' 

            // if reminder checkbox is checked, set to true
            checked={reminder}

            // new {reminder} value from user sets to ture if box is checked
            value={reminder} onChange={(e) => 

            // setreminder used for changing state. New {reminder} value of user passed as event into onChange(e) if box is checked
            setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Save Task' className="btn btn-block" />
    </form>
  )
}

export default AddTask
