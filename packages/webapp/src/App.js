import './App.css';
import LeftPanel from './components/LeftPanel/LeftPanel';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';
import Header from './components/Header/Header';
import { useSelector } from "react-redux";

function App () {
  const showLeftPanel = useSelector((state) => !state.state.hideNavigationCalendar);
  console.log(showLeftPanel);
  return (
    <div className='App'>
      <Header/>
      <div className='my-calendar'>
        { showLeftPanel && <LeftPanel />}
        <CalendarGrid />
      </div>
    </div>
  )
}

export default App
