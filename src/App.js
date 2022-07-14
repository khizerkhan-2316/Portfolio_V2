import './App.css';
import './root.css';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import HeroSection from './Views/HeroSection/HeroSection';
import AboutMe from './Views/AboutMeSection/AboutMe';

function App() {
  return (
    <div className="App">
      <div className="image-container-fixed"></div>
      <main className="main-content-container">
        <Navigationbar />
        <HeroSection />
        <AboutMe />
      </main>
    </div>
  );
}

export default App;
