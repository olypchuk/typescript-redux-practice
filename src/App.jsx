import React from 'react';
import Authpage from './pages/AuthPage/AuthPage';
import Homepage from './pages/HomePage/Homepage';
import './App.css';
import { useSelector } from 'react-redux'
import {Route,Routes,Navigate} from 'react-router-dom'

function App() {
  const isLogin = useSelector(state => state.isLogin)

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={isLogin ?
          <Navigate to='/homepage' />
          : <Navigate to="/authpage" />} />
        
        <Route path="/authpage"  element={isLogin ?<Navigate to='/homepage' />:<Authpage />}/>
        <Route path="/homepage" element={isLogin ? <Homepage/> :<Navigate to='/authpage' /> }/>
      </Routes>
   
      
    </div>
  );
}

export default App;
