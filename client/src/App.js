import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home/HomePage';
import SearchJob from './pages/SearchJob';
import SpecializationsPage from './pages/Specializations/SpecializationsPage';
import SpecializationDetailsPage from './pages/SpecializationDetailsPage';
import LoginRegister from './pages/authentification/LoginRegister';
import ManageJobsPage from './pages/recruter/ManageJobsPage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='mt-12'></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchjob" element={<SearchJob />} />
        <Route path="/specializations/:industry" element={<SpecializationsPage />} />
        <Route path="/specializationdetails/:specid" element={<SpecializationDetailsPage />} />
        <Route path="/auth/:type" element={<LoginRegister />} />
        <Route path="/applications" element={<ManageJobsPage />}/>
      </Routes>
      
    </div>
  );
}

export default App;
