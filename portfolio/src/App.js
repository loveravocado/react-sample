import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import  { Calendar }  from './components/Calendar';
import './App.css';

function App() {
  return (

  <div>
    <h1>Sharexpense</h1>
    <Calendar />
  </div>

  );
}

export default App;
