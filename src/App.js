import React, { useState } from 'react';
import LoginPage from './loginpage';
import RegisterPage from './Registerpage';
import TopToolbar from './topToolbar';
import TabBar from './dataAccordion';
import AddChild from './AddChild';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const MyContext = React.createContext();

//main application
const App = () => {

  // const blankArr = useRef([])

  const [tiles, setTiles] = useState([]); //tiles = children there
  const [selectedTile, setSelectedTiles] = useState({}); //tiles = children there
  const [fileUploaded, setFileUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

//   let completeDate = {
//     username: "",
// }

  // window.globalVars = { "kidDetail": [] };

  // context to contain- Tiles(childrenDet)/Done, UserDetail(fromlogin), vaccinationDetails(fromAI/manual), fileUploaded


  return (


    <Router>
      <MyContext.Provider value={{ selectedTile, setSelectedTiles, tiles, setTiles, fileUploaded, setFileUploaded, selectedFile, setSelectedFile, previewUrl, setPreviewUrl, activeTab, setActiveTab, isLoggingIn, setIsLoggingIn}}>
        <TopToolbar></TopToolbar>
        <div className="App">

          <Routes>
            <Route exact path="/" element={<AddChild />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/Register" element={<RegisterPage />} />
            <Route exact path="/VaccineDet" element={<TabBar />} />
          </Routes>
        </div>
      </MyContext.Provider>
    </Router>


  );
};

export default App;
export { MyContext };