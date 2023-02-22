import './App.css';
import Header from './components/Header';
import UseRefPlayer from './hooks/UseRefPlayer';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      
          
            <>
              <Header />
              
                  <Routes>
                    <Route exact path="/" element={<Navigation />} />
                    <Route path="/ref" element={< UseRefPlayer/>} />
                  </Routes>
               
            </>
          
        
    
    </Router>
  );
}

export default App;
