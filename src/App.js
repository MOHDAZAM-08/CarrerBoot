import './App.css';
import Explore from './component/Explore';
import LandingPage from './component/LandingPage';
import LoginPage from './component/LoginPage';
import Navbar from './component/Navbar';
import PreviewExplor from './component/PreviewExplor';
import SignUp from './component/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <LandingPage/>
      <Explore/>
      <PreviewExplor/>
    </div>
  );
}

export default App;
