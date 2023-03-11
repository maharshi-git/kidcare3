import React from 'react';
import LoginPage from './loginpage';
import RegisterPage from './Registerpage';
import FileUploaderMod from './fileUploader';
import TopToolbar from './topToolbar';
import TabBar from './dataAccordion';
import AddChild from './AddChild';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

  window.globalVars = {"kidDetail" : []};

  return (

    
      <Router>

        <TopToolbar></TopToolbar>
        <div className="App" style={{ backgroundImage: "url(./circle.jpg)" }}>

          <Routes>
            
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/" element={<AddChild />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/FileUploader" element={<FileUploaderMod />} />
            <Route path="/VaccineDet" element={<TabBar></TabBar>} />
          </Routes>
        </div>

      </Router>
  

  );
};

export default App;