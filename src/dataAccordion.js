import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import VaccLogo from './resources/buffer.png';
import BoyImageTile from './resources/boy.png'
import './App.css'
import VaccineDetail from './resources/vaccineDetail.json'

// import { VaccineZeroToSix, VaccineSixMToOneY } from './editableList';

import EditableTable from './EditableTable'


function FourTabBars({ tabs }) {
    // console.log(VaccineDetail)
    let vacc0To6Mnth = VaccineDetail.vaccine0To6Mnth;
    let vaccine6To12Mnth = VaccineDetail.vaccine6To12Mnth;

    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    let uploadSelected = (data.uploadSelected) ? true : false;
    const [activeTab, setActiveTab] = useState(0);
    // const [kidName, setKidName] = useState("");
    // const [kidDOB, setKidDOB] = useState("");

    tabs = [{ "title": "0 - 6 Months", "content": <EditableTable vaccData={vacc0To6Mnth} DOB={data.DOB}></EditableTable> },
    { "title": "6 - 12 Months", "content": <EditableTable vaccData={vaccine6To12Mnth} DOB={data.DOB}></EditableTable> }
    // { "title": "6 - 12 months", "content": <EditableTable></EditableTable> },
    // { "title": "12 - 18 months", "content": <EditableTable></EditableTable> },

    ]


    const handleSelect = (selectedIndex) => {
        setActiveTab(selectedIndex);
    };

    const handleNaviFileUplo = () => {

        navigate("../FileUploader", { "state": data })
    }

    

    return (
        <>
            
              <div className="tileStyle text-light p-4" style={{"width": "100%", "height": "8rem", "display": "flex"}}>
                <img src={BoyImageTile} style={{ "width": "5rem", "height": "5rem" }} alt=""></img>
                <p style={{ "color": "Black", "margin": "1rem" }}>{data.name} <br></br> {data.DOB}</p>

              </div>
            

            {
                (!uploadSelected) ?
                    // <p>Would you like to upload existing document and auto populate Data? <Link to={{ pathname: "/FileUploader", "state": {data: data} }} >click Here</Link></p>
                    <p style={{"marginTop": "1rem"}}>Would you like to upload existing document and auto populate Data? 
                    <button onClick={() => {handleNaviFileUplo()}} style={{"backgroundColor": "transparent", "border": "none", "color": "Blue"}}>click Here</button>
                    </p>
                    :
                    <>
                        <img src={VaccLogo} className="spin-icon" style={{ "width": "1rem" }} alt=""></img>
                        <p>Your Data is Loading</p>
                    </>
            }

            <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
                <Nav variant="tabs">
                    {tabs.map((tab, index) => (
                        <Nav.Item key={index}>
                            <Nav.Link eventKey={index}>
                                {tab.title}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                <Tab.Content>
                    {tabs.map((tab, index) => (
                        <Tab.Pane key={index} eventKey={index}>
                            {tab.content}
                        </Tab.Pane>
                    ))}
                </Tab.Content>
            </Tab.Container>
        </>

    );
}

export default FourTabBars;
