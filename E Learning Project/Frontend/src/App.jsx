import Register from '../src/components/student/Register'
import Login from './components/student/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import ScreenLoader from './components/ScreenLoader';
import SidebarRoute from './components/student/SidebarRoute';
import ClassState from './context/class/classState';

function App() {

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2200)
  }, [])
  
  onbeforeunload = function () {
    localStorage.removeItem('StudentAuthToken');
    localStorage.removeItem('Name');
    return '';
  };

  return (
    <>
      {
        loading ?
          <ScreenLoader />
          :
          <ClassState>
            <Router>
              <Routes>
                <Route path='*' element={<SidebarRoute />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </Router>
          </ClassState>

      }



    </>
  )
}

export default App
