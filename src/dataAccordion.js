import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";

//components
import VaccineDetail from './resources/vaccineDetail.json'
import EditableTable from './EditableTable'
import FileUploader from './fileUploaderIntegrated'

//images

import BoyImageTile from './resources/boy.png'

function FourTabBars({ tabs }) {

    let vacc0To6Mnth = VaccineDetail.vaccine0To6Mnth;
    let vaccine6To12Mnth = VaccineDetail.vaccine6To12Mnth;
    let vaccine1YearTo5Years = VaccineDetail.vaccine1YearTo5Years;
    let vaccine6YearsPlus = VaccineDetail.vaccine6YearsPlus;

    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    // let uploadSelected = (data.uploadSelected) ? true : false;
    const [activeTab, setActiveTab] = useState(0);

    tabs = [{ "title": "0 - 6 Months", "content": <EditableTable vaccData={vacc0To6Mnth} DOB={data.DOB}></EditableTable> },
    { "title": "6 - 12 Months", "content": <EditableTable vaccData={vaccine6To12Mnth} DOB={data.DOB}></EditableTable> },
    { "title": "1 year to 6 years", "content": <EditableTable vaccData={vaccine1YearTo5Years} DOB={data.DOB}></EditableTable> },
    { "title": "6 years +", "content": <EditableTable vaccData={vaccine6YearsPlus} DOB={data.DOB}></EditableTable> }

    ]

    const handleSaveVaccDet = () => {
        navigate("../Login")
      }


    const handleSelect = (selectedIndex) => {
        setActiveTab(selectedIndex);
    };

    // const handleNaviFileUplo = () => {
    //     navigate("../FileUploader", { "state": data })
    // }

    return (
        <>
            <div className="tileStyle text-light p-4" style={{ "width": "100%", "height": "8rem", "display": "flex" }}>
                <img src={BoyImageTile} style={{ "width": "5rem", "height": "5rem" }} alt=""></img>
                <p style={{ "color": "Black", "margin": "1rem" }}>{data.name} <br></br> {data.DOB}</p>
                <FileUploader></FileUploader>
            </div>
            {/* {
                (uploadSelected) &&                  
                    // <p style={{"marginTop": "1rem"}}>Would you like to upload existing document and auto populate Data? 
                    // <button onClick={() => {handleNaviFileUplo()}} style={{"backgroundColor": "transparent", "border": "none", "color": "Blue"}}>click Here</button>
                    // </p>
                    // :
                    <>
                        <img src={VaccLogo} className="spin-icon" style={{ "width": "1rem" }} alt=""></img>
                        <p>Your Data is Loading</p>
                    </>
            } */}

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
                            <div className="scroll-container">
                                {tab.content}
                            </div>
                            <div>
                                <button onClick={handleSaveVaccDet} className='btn btn-success smallMargin appButtonPurple'>Save</button>
                            </div>
                        </Tab.Pane>
                    ))}
                </Tab.Content>
            </Tab.Container>
        </>

    );
}

export default FourTabBars;
