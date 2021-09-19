import './App.css';
import LeftPanel from './components/LeftPanel/LeftPanel';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';

function App () {
  return (
    <div className='App'>
      <div className='my-calendar'>
        <LeftPanel />
        <CalendarGrid />
      </div>
    </div>
  )
}

export default App
