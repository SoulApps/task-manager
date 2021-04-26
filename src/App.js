import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true, 
    },
    {
        id: 2,
        text: 'FRS Meeting',
        day: 'Feb 6th at 2:30pm',
        reminder: false, 
    },
    {
        id: 3,
        text: 'IT Meeting',
        day: 'Feb 6th at 10am',
        reminder: true, 
    },
    {
        id: 4,
        text: 'Sports Event',
        day: 'Feb 10th at 5pm',
        reminder: false, 
    },
    {
        id: 5,
        text: 'Doctors 2nd Appointment',
        day: 'Feb 11th at 2:30pm',
        reminder: true, 
    },
    {
        id: 6,
        text: 'B Day',
        day: 'Feb 22nd at 11:30am',
        reminder: true, 
    },

    ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;