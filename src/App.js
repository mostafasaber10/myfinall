import './App.css';
import Home from './container/home1/Home';
import Navbar from './container/Navbar';

import Hometwo from './container/home2/Hometwo';
import Homethree from './container/home3/Homethree'

import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Homefour from './container/home4/Homefour';




function App() {
  return (
    <div className="App">

    <BrowserRouter>


      <Navbar/>
    
    
      <Routes>

      
  <Route index path="/" element={<Home />}  />
  <Route path="/Hometwo" element={<Hometwo />} />
  <Route path="/Homethree" element={<Homethree />} />
  <Route path='/Homefour' element={<Homefour/>}/>
  
  

    </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;
