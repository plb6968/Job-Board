import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewJobPage from '../NewJobPage/NewJobPage';
import AllJobsPage from '../AllJobsPage/AllJobsPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage'
import NoUserNavBar from '../../components/NoUserNavBar/NoUserNavBar'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            
            <Routes>
              {/* Route components in here */}
              <Route path='/' element={<HomePage />} />
              <Route path="/jobs/new" element={<NewJobPage />} />
              <Route path="/jobs" element={<AllJobsPage />} />
            </Routes>
          </>
          :
          <>
            <NoUserNavBar />
            <AuthPage setUser={setUser} />
            <Routes>
              <Route path="/jobs" element={<AllJobsPage />} />
            </Routes>  
          </>
      }
    </main>
  );
}
