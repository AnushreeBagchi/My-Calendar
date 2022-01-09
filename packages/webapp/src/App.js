import './App.css';
import LeftPanel from './components/LeftPanel/LeftPanel';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';
import Header from './components/Header/Header'

function App () {
  return (
    <div className='App'>
      <Header/>
      <div className='my-calendar'>
        <LeftPanel />
        <CalendarGrid />
      </div>
    </div>
  )
}

export default App
