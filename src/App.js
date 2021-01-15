import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import Main from './components/Main';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './components/navigation.css';



function App() {
  return (
    <div>
      <Navigation />
      <Sidebar />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
