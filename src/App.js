import './App.css';
import './root.css';
import NavigationBar from './Components/Navigationbar/Navigationbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import ProjectOverview from './Components/ProjectOverview/ProjectOverview';
import { ProjectProvider } from './Context/ProjectContext';
import { ExperinceProvider } from './Context/ExperinceContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <main>
          <ProjectProvider>
            <ExperinceProvider>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/:id" element={<ProjectOverview />} />
                <Route exact path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </ExperinceProvider>
          </ProjectProvider>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
