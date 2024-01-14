import React from 'react';
import 'bulma/css/bulma.min.css';
import LoginScreen from './pages/Login'
import LoginStudentScreen from './pages/LoginStudent'
import LoginProctorScreen from './pages/LoginProctor'
import LoginAdminScreen from './pages/LoginAdmin'
import LoginParentScreen from './pages/LoginParent'
import StudentHistoryScreen from './pages/StudentHistory'
import ProctorHistoryScreen from './pages/ProctorHistory'
import EmailVerificationForPassword from './pages/EmailVerificationToChangePassword'
import EmailVerificationForPasswordStudent from './pages/EmailVerificationToChangePasswordStudent'
import EmailVerificationForPasswordProctor from './pages/EmailVerificationToChangePasswordProctor'
import EmailVerificationPageWithCode from './pages/VerificationPage'
import EmailVerificationPageWithCodeStudent from './pages/VerificationPageStudent'
import EmailVerificationPageWithCodeProctor from './pages/VerificationPageProctor'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from "./components/NavBar";
import LeaveApplicationFormScreen from './pages/LeaveApplicationFormScreen';
import LeaveApprovalPage from './pages/LeaveApprovalPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element = {<Home />} />
        <Route path = '/login' element = {<LoginScreen />} />
        <Route path = '/loginstudent' element = {<LoginStudentScreen />} />
        <Route path = '/loginproctor' element = {<LoginProctorScreen />} />
        <Route path = '/loginadmin' element = {<LoginAdminScreen />} />
        <Route path = '/loginparent' element = {<LoginParentScreen />} />
        <Route path = '/home' element = {<Home />} />
        <Route path = '/leaveapplication' element = {<LeaveApplicationFormScreen />} />
        <Route path="/studenthistory" element={<StudentHistoryScreen />} />
        <Route path="/proctorhistory" element={<ProctorHistoryScreen />} />
        <Route path="/leaveapproval" element={<LeaveApprovalPage />} />
        <Route path="/emailverification" element={<EmailVerificationForPassword />} />
        <Route path="/emailverificationstudent" element={<EmailVerificationForPasswordStudent />} />
        <Route path="/emailverificationproctor" element={<EmailVerificationForPasswordProctor />} />
        <Route path="/codeverification" element={<EmailVerificationPageWithCode/>} />
        <Route path="/codeverificationstudent" element={<EmailVerificationPageWithCodeStudent/>} />
        <Route path="/codeverificationproctor" element={<EmailVerificationPageWithCodeProctor/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;