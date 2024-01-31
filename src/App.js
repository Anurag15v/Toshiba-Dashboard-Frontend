import './App.css';
import SideBar from './components/sideBar/sideBar'
import WidgetScreen from './components/widgetScreen/widgetScreen';
function App() {
  return (
    <div className="App">
      <SideBar/>
      <div className='content'>
        <WidgetScreen/>
      </div>
    </div>
  );
}

export default App;
