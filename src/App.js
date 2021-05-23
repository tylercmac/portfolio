import './App.css';
import Title from './components/Title'
import NavBar from './components/NavBar'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Scroll from './components/Scroll'

function App() {
  return (
    <>
      <div className='parallax one'>
        <NavBar />
        <Title />
        <Scroll />
      </div>
      <About />
      <div className='parallax two'>
      </div>
      <Work />
      <div className='parallax three' id='final-scroll'>
      </div>
      <Contact />
    </>
  );
}

export default App;
