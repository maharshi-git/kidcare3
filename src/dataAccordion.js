import React, { useState, useContext, useEffect } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { MyContext } from './App'

//components
import VaccineDetail from './resources/vaccineDetail.json'
import EditableTable from './EditableTable'
import FileUploader from './fileUploaderIntegrated'

//images

import BoyImageTile from './resources/boy.png'
import GirlImageTile from './resources/woman.png'


function FourTabBars({ tabs }) {

    console.log("tabbar")

    const { selectedTile } = useContext(MyContext);
    const { tiles } = useContext(MyContext);
    // const {completeData } = useContext(MyContext);

    // const [vacc0To6Mnth, setVacc0To6Mnth] = useState();
    // const [vaccine6To12Mnth, setVaccine6To12Mnth] = useState();
    // const [vaccine1YearTo5Years, setVaccine1YearTo5Years] = useState();
    // const [vaccine6YearsPlus, setVaccine6YearsPlus] = useState();

    const [vacc0To6Mnth, setVacc0To6Mnth] = useState(VaccineDetail.vaccine0To6Mnth);
    const [vaccine6To12Mnth, setVaccine6To12Mnth] = useState(VaccineDetail.vaccine6To12Mnth);
    const [vaccine1YearTo5Years, setVaccine1YearTo5Years] = useState(VaccineDetail.vaccine1YearTo5Years);
    const [vaccine6YearsPlus, setVaccine6YearsPlus] = useState(VaccineDetail.vaccine6YearsPlus);

    // useEffect(() => {
    //     if (tiles.find(x => x.name === selectedTile.name).vaccDetail) {
    //         setVacc0To6Mnth(tiles.find(x => x.name = selectedTile.name).vaccDetail.vaccine0To6Mnth)
    //         setVaccine6To12Mnth(tiles.find(x => x.name = selectedTile.name).vaccDetail.vaccine6To12Mnth)
    //         setVaccine1YearTo5Years(tiles.find(x => x.name = selectedTile.name).vaccDetail.vaccine1YearTo5Years)
    //         setVaccine6YearsPlus(tiles.find(x => x.name = selectedTile.name).vaccDetail.vaccine6YearsPlus)
    //     } else {
    //         setVacc0To6Mnth("Hello")
    //         setVaccine6To12Mnth(VaccineDetail.vaccine6To12Mnth)
    //         setVaccine1YearTo5Years(VaccineDetail.vaccine1YearTo5Years)
    //         setVaccine6YearsPlus(VaccineDetail.vaccine6YearsPlus)
    //     }
    // }, [])

    // if(!tiles.vaccDetail){
    //     // setSelectedFile(selectedTile.fileDetail.fileDet)
    //     setVacc0To6Mnth(VaccineDetail.vaccine0To6Mnth)
    //     setVaccine6To12Mnth(VaccineDetail.vaccine6To12Mnth)
    //     setVaccine1YearTo5Years(VaccineDetail.vaccine1YearTo5Years)
    //     setVaccine6YearsPlus(VaccineDetail.vaccine6YearsPlus)
    // }

    //setupGlobalModel
    tiles.find(x => selectedTile).vaccDetail = {
        vacc0To6Mnth: vacc0To6Mnth,
        vaccine6To12Mnth: vaccine6To12Mnth,
        vaccine1YearTo5Years: vaccine1YearTo5Years,
        vaccine6YearsPlus: vaccine6YearsPlus
    }

    const vaccineSetState = (arr, cat) => {

        let vac06 = [], vac6to12 = [], vac1to5 = [], vac6plus = [];

        for (var i in arr) {
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

    // const location = useLocation();
    // const data = location.state;
    const navigate = useNavigate();

    //figure out which tab to land on.- util function
    let DOBDateFormat = new Date(selectedTile.DOB);
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
    // const [activeTab, setActiveTab] = useState(tabNumber);
    const { activeTab, setActiveTab } = useContext(MyContext);
    useEffect(() => {
        setActiveTab(tabNumber)
    }, [])


    tabs = [{ "title": "0 - 6 Months", "content": <EditableTable vaccData={vacc0To6Mnth} age={age} DOB={selectedTile.DOB}></EditableTable> },
    { "title": "6 - 12 Months", "content": <EditableTable vaccData={vaccine6To12Mnth} age={age} DOB={selectedTile.DOB}></EditableTable> },
    { "title": "1 year to 6 years", "content": <EditableTable vaccData={vaccine1YearTo5Years} age={age} DOB={selectedTile.DOB}></EditableTable> },
    { "title": "6 years +", "content": <EditableTable vaccData={vaccine6YearsPlus} age={age} DOB={selectedTile.DOB}></EditableTable> }

    ]



    const handleSaveVaccDet = () => {
        // navigate("../Login")x    
        navigate("../Login", {state: {headerText: "Login with Google or Create a new account to save your data"}})
    }


    const handleSelect = (selectedIndex) => {
        setActiveTab(selectedIndex);
    };

    // const handleNaviFileUplo = () => {
    //     navigate("../FileUploader", { "state": data })
    // }

    const styleScroll = {
        width: "100%", height: "8rem", display: "flex",
        overflow: (navigator.userAgent.indexOf("Windows") > 0) ? "hidden" : "scroll"
    }

    return (
        <>
            <div className="tileStyle text-light p-4" style={styleScroll}>
                <img src={(selectedTile.genderMale) ? BoyImageTile : GirlImageTile} style={{ "width": "5rem", "height": "5rem" }} alt=""></img>
                <p style={{ "color": "Black", "margin": "1rem" }}>{selectedTile.name} <br></br> {selectedTile.DOB}</p>
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
