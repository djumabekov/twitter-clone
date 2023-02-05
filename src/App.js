import './App.css';
import SideMenu from './components/SideMenuComponent';
import Home from './components/HomeComponent';

function App() {
  return (
    <div className="App d-flex mx-5">
      <SideMenu />
      <div className="vertical-devider"></div>
      <Home />
      <div className="vertical-devider"></div>
    </div>
  );
}

export default App;
