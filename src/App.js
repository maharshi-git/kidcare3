import React from 'react';
import LoginPage from './loginpage';
import RegisterPage from './Registerpage';
import FileUploaderMod from './fileUploader';
import TopToolbar from './topToolbar';
import TabBar from './dataAccordion';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';


const App = () => {

  

  return (
    <>
      
      <Router>
      <TopToolbar></TopToolbar>
        <div className="App" style={{ backgroundImage: "url(./circle.jpg)" }}>

          <Routes>
            <Route exact path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/" element={<FileUploaderMod />} />
            <Route path="/VaccineDet" element={ <TabBar></TabBar>} />

          </Routes>
        </div>

      </Router>
    </>

  );
};

export default App;