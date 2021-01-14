import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
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
