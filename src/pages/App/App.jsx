import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewJobPage from '../NewJobPage/NewJobPage';
import AllJobsPage from '../AllJobsPage/AllJobsPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage'
import * as jobsAPI from '../../utilities/jobs-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  async function handleNewJob(jobData) {
    const job = await jobsAPI.add(jobData);
    setJobs(...jobs, job)
  }
  

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            
            <Routes>
              {/* Route components in here */}
              <Route path='/' element={<HomePage />} />
              <Route path="/jobs/new" element={<NewJobPage jobs={jobs} handleNewJob={handleNewJob}/>} />
              <Route path="/jobs" element={<AllJobsPage jobs={jobs} />} />
            </Routes>
          </>
          :
            <AuthPage setUser={setUser} />
      }
    </main>
  );
}
