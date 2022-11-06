import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div >
      <Nav />
      <main>
            <Routes>
             <Route path="/" element={ <Main />} />
             <Route path="/about" element={ <About /> } />
             <Route path="/Projects" element={ <Projects /> } />
            </Routes>
        </main>
    </div>
  );
}

export default App;
