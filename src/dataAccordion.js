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

    

    const [vacc0To6Mnth, setVacc0To6Mnth] = useState(VaccineDetail.vaccine0To6Mnth);
    const [vaccine6To12Mnth, setVaccine6To12Mnth] = useState(VaccineDetail.vaccine6To12Mnth);
    const [vaccine1YearTo5Years, setVaccine1YearTo5Years] = useState(VaccineDetail.vaccine1YearTo5Years);
    const [vaccine6YearsPlus, setVaccine6YearsPlus] = useState(VaccineDetail.vaccine6YearsPlus);

    const vaccineSetState = (arr, cat) => {

        let vac06 = [], vac6to12= [], vac1to5 = [], vac6plus = [];

        for(var i in arr){
            switch (arr[i].vaccDataCatgr) {
                case "A":
                    vac06.push(arr[i]);
                    break;
                case "B":
                    vac6to12.push(arr[i]);
                    break;
                case "C":
                    vac1to5.push(arr[i]);
                    break;
                case "D":
                    vac6plus.push(arr[i]);
                    break;
                default:
                    vac06.push(arr[i]);
                    break;
            }
        }

        setVacc0To6Mnth(vac06)
        setVaccine6To12Mnth(vac6to12)
        setVaccine1YearTo5Years(vac1to5)
        setVaccine6YearsPlus(vac6plus)
        

     }

    // let vacc0To6Mnth = VaccineDetail.vaccine0To6Mnth;
    // let vaccine6To12Mnth = VaccineDetail.vaccine6To12Mnth;
    // let vaccine1YearTo5Years = VaccineDetail.vaccine1YearTo5Years;
    // let vaccine6YearsPlus = VaccineDetail.vaccine6YearsPlus;

    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();

    //figure out which tab to land on.- util function
    let DOBDateFormat = new Date(data.DOB);
    let Today = new Date();
    let timeDiff = Today.getTime() - DOBDateFormat.getTime();
    let age = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    console.log(age);
    let tabNumber;
    if (age < 183) {
        tabNumber = 0;
    } else if (age < 365) {
        tabNumber = 1
    } else if (age < 2190) {
        tabNumber = 2
    } else {
        tabNumber = 3
    }

    // let uploadSelected = (data.uploadSelected) ? true : false;
    const [activeTab, setActiveTab] = useState(tabNumber);

    tabs = [{ "title": "0 - 6 Months", "content": <EditableTable vaccData={vacc0To6Mnth} age={age} DOB={data.DOB}></EditableTable> },
    { "title": "6 - 12 Months", "content": <EditableTable vaccData={vaccine6To12Mnth} age={age} DOB={data.DOB}></EditableTable> },
    { "title": "1 year to 6 years", "content": <EditableTable vaccData={vaccine1YearTo5Years} age={age} DOB={data.DOB}></EditableTable> },
    { "title": "6 years +", "content": <EditableTable vaccData={vaccine6YearsPlus} age={age} DOB={data.DOB}></EditableTable> }

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

    const styleScroll = { width: "100%", height: "8rem", display: "flex", 
    overflow: (navigator.userAgent.indexOf("Windows") > 0) ? "hidden" : "scroll" }

    return (
        <>
            <div className="tileStyle text-light p-4" style={styleScroll}>
                <img src={BoyImageTile} style={{ "width": "5rem", "height": "5rem" }} alt=""></img>
                <p style={{ "color": "Black", "margin": "1rem" }}>{data.name} <br></br> {data.DOB}</p>
                <FileUploader vaccFunc={vaccineSetState}></FileUploader>
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
