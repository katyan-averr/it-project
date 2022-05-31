import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import MyApplications from './pages/MyApplications';
import CreateApplications from './pages/CreateApplications';
import AppInExchange from './pages/AppInExchange';
import AppExchange from './pages/AppExchange';
import AppInProgress from './pages/AppInProgress';
import Authorization from './pages/Authorization';
import MyProfile from './pages/MyProfile';

function Routing() {
  return (
        <BrowserRouter>
            <Routes>
              <Route path='/'  element={<HomePage />} />
              <Route path='/appExchange' element={<AppExchange/>} />
              <Route path='/appInExchange' element={<AppInExchange/>} />
              <Route path='/appInProgress' element={<AppInProgress/>} />
              <Route path='/myApplications' element={<MyApplications />} />
              <Route path='/createApplications' element={<CreateApplications/>} />
              <Route path='/authorization' element={<Authorization/>} />
              <Route path='/myProfile' element={<MyProfile/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default Routing;