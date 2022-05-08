import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Faq from './Components/Faq';
import Solutions from './Components/Solutions'
import About from './Components/About';
import Contact from './Components/Contact';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/about' element = {<About/>}/>
      </Routes>
      <Routes>
        <Route path='/faq' element = {<Faq/>}/>
      </Routes>
      <Routes>
        <Route path='/solutions' element = {<Solutions/>}/>
      </Routes>
      <Routes>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
