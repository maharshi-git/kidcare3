import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import BoyImageTile from './resources/boy.png'
import { useNavigate } from "react-router-dom";

function SquareTiles() {
  const [tiles, setTiles] = useState([]);
  const [kidName, setKidName] = useState([]);
  const [kidDOB, setKidDOB] = useState([]);

  let navigate = useNavigate()

  const addTile = () => {

    setTiles([...tiles, { "name": kidName, "DOB": kidDOB }]);


  };

  const handleKidNameChange = (e) => {
    setKidName(e.target.value);
  }

  const handleKidDOBChange = (e) => {
    setKidDOB(e.target.value);
  }

  const navigateToVaccDet = (index) => {
    // console.log("Navigate Presed");
    
      var namePost = tiles[index].name;
      var dobPost = tiles[index].DOB;
      navigate("./VaccineDet", { "state": { "name": namePost, "DOB": dobPost, "uploadSelected":  false} })
    
  }

  return (
    <Container>



      <Row>
        {tiles.map((tile, index) => (
          <Col key={index} className="p-2">
            <button onClick={() =>{ navigateToVaccDet(index) }} style={{ "border": "none" }}>
              <div className="tileStyle text-light p-4" >
                <img src={BoyImageTile} style={{ "width": "10rem", "height": "10rem" }} alt=""></img>
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
          <button className="btn btn-success smallMargin appButtonPurple" disabled={!((kidName.length > 0) && (kidDOB.length > 0))} variant="primary" onClick={addTile}>Add Child</button>
        </div>
      </div>
    </Container>
  );
}

export default SquareTiles;


