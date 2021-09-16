import './App.css'
import LeftPanel from './components/LeftPanel/LeftPanel'
import RightPanel from './components/RightPanel/RightPanel'

function App () {
  return (
    <div className='App'>
      <p>My Calendar</p>
      <div className='my-calendar'>
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  )
}

export default App
