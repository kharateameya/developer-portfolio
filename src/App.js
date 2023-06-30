import './App.css';
import Header from './components/Header';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';

function App() {
  return (
    <div>
     <Header/>
     <HomeScreen/>
     <AboutScreen/>
     <ProjectsScreen/>
     <ContactScreen/>
    </div>
  );
}

export default App;
