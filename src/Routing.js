import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import App from './App';
import MyApplications from './MyApplications';
import CreateApplications from './CreateApplications';
import AppInExchange from './AppInExchange';
import AppExchange from './AppExchange';
import AppInProgress from './AppInProgress';
import Authorization from './Authorization';
import MyProfile from './MyProfile';

function Routing() {
  return (
        <BrowserRouter>
            <Routes>
              <Route path='/'  element={<App />} />
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