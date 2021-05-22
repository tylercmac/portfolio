import './App.css';
import Title from './components/Title'
import NavBar from './components/NavBar'
import About from './components/About'

function App() {
  return (
    <>
      <div className='parallax one'>
        <NavBar />
        <Title />
      </div>
      <About />
      <div className='parallax two'>

      </div>
    </>
  );
}

export default App;
