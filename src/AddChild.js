import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { MyContext } from './App'
import { Form } from 'react-bootstrap';

//css files
import './App.css';

//image files
import BoyImageTile from './resources/boy.png'
import GirlImageTile from './resources/woman.png'
import maleIcon from './resources/male.png'
import femaleIcon from './resources/female.png'


function SquareTiles() {

  // console.log("suareTiles")
  // const [tiles, setTiles] = useState(tilesOld);
  const [kidName, setKidName] = useState([]);
  const [kidDOB, setKidDOB] = useState([]);
  // const [kidDOB, setKidDOB] = useState([]);
  const [city, setCity] = useState([]);
  const [country, setCountry] = useState([]);
  const [genderMale, setGender] = useState(false);

  const { tiles, setTiles } = useContext(MyContext);
  const { setSelectedTiles } = useContext(MyContext);
  const { isLoggingIn } = useContext(MyContext);

  const handleGenderChange = (event) => {
    setGender(!genderMale);
  };

  // let tilesOld = [];
  // //check kid exists
  // if (window.globalVars.kidDetail.length > 0) {
  //   window.globalVars.kidDetail.forEach((x) => {
  //     tilesOld.push(x);
  //   })
  // } else {
  //   //set States

  //   tilesOld = []

  // }



  //create classes
  let navigate = useNavigate()

  const addTile = () => {
    if (tiles.length >= 1 && (!isLoggingIn)) {
      navigate("./Login", { state: { headerText: "Please login to add more child" } })
    } else {
      setTiles([...tiles, { "name": kidName, "DOB": kidDOB, "city": city, "country": country, "genderMale": genderMale }]);
    }



  };

  //textbox functions
  const handleKidNameChange = (e) => {
    setKidName(e.target.value);
  }

  const handleKidDOBChange = (e) => {
    setKidDOB(e.target.value);
  }


  const navigateToVaccDet = (index) => {

    //setup wholeData


    // var namePost = tiles[index].name;
    // var dobPost = tiles[index].DOB;
    setSelectedTiles(tiles[index])
    navigate("./VaccineDet")

  }

  const handleCityChange = (e) => {
    setCity(e.target.value);
  }
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  }

  return (
    <div style={{ "verticalAlign": "middle" }}>
      <Container >
        <Row>
          {tiles.map((tile, index) => (
            <Col key={index} className="p-2">
              <button onClick={() => { navigateToVaccDet(index) }} style={{ "border": "none" }}>
                <div className="tileStyle text-light p-4" >                 
                  <img src={(tile.genderMale) ? BoyImageTile: GirlImageTile} style={{ "width": "10rem", "height": "10rem" }} alt=""></img>
                  <p style={{ "color": "Black" }}>{tile.name} <br></br> {tile.DOB}</p>
                </div>
              </button>
            </Col>
          ))}
        </Row>

        <div style={{
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          "margin": "1rem"
        }}>
          <div className="tileStyle text-light p-4" >
            <input placeholder="Kid's Name" value={kidName} onChange={handleKidNameChange} className="form-control smallMargin"></input>
            <input placeholder="Date of Birth" value={kidDOB} onChange={handleKidDOBChange} type="date" className="form-control smallMargin"></input>
            {/* <Form>
              <Form.Check
                type="switch"
                id="gender-switch"
                label={gender === 'male' ? 'Male' : 'Female'}
                value={gender}
                onChange={handleGenderChange}
              />
            </Form> */}
            <button className='transparentBtn' onClick={(e) => handleGenderChange(e)}>
              
                <img src={(genderMale) ? maleIcon : femaleIcon} alt="" style={{ "width": "1rem", "height": "1rem" }}></img>
           
            </button>
            <div style={{ "display": "flex" }}>
              <input placeholder="City" value={city} onChange={handleCityChange} className="form-control smallMargin" style={{ "marginRight": "1rem" }}></input>
              <input placeholder="Country" value={country} onChange={handleCountryChange} className="form-control smallMargin" ></input>
            </div>

            <button className="btn btn-success smallMargin appButtonPurple" disabled={!((kidName.length > 0) && (kidDOB.length > 0))} variant="primary" onClick={addTile}>Add Child</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SquareTiles;


