import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className='mt-12'></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      
    </div>
  );
}

export default App;
