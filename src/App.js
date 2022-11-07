import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Nav from './Nav';
import Projects from './Projects';
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div >
      <Nav />
      <main>
          <Routes>
             <Route path="/" element={ <Main />} />
             <Route path="/Projects" element={ <Projects /> } />
          </Routes>
        </main>
    </div>
  );
}

export default App;
