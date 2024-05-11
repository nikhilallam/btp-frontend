import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';

import Navbar from '../Navbar/navbar.js';
import Footer from '../Footer/footer.js';

import "bootstrap-icons/font/bootstrap-icons.css";

import {  Route , Routes } from "react-router-dom";

import Home from '../Form/form.js'; 
import About from '../AboutUs/aboutus.js';
import Contact from '../contact/index.js';
import NotFoundPage from '../nopage.js';
import PaymentSuccess from '../PaymentSuccess.js';
import EmployeeRegistration from '../FormEmp/form.js'
import Login from '../login/login.js';
import NewRegistration from "../NewHire/NewRegistration.js";
import Dashboard from "../Dashboard/dashboard.js";
import CompanyDashboard from '../CompanyDashboard/companyDashboard.js'

function App() {
  return (
      <div>
      <Navbar />

        <Routes>
          <Route exact path="/"  element={<Login/>}> </Route>
          <Route  path="/companyregistration"  element={<Home/>}> </Route>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path = "/paymentsuccess" element = {<PaymentSuccess/>} />
          <Route path = "/employeeregistration" element = {<EmployeeRegistration/>} />
          <Route path = "/newregistration" element = {<NewRegistration/>} />
          <Route path = "/dashboard" element ={<Dashboard/>} /> 
          <Route path = "/company-dashboard" element ={<CompanyDashboard />} /> 
          <Route path ='*' element = {<NotFoundPage/>} />
        </Routes>

        <Footer />
      </div>
   
  );
}

export default App;

