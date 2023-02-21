import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import SympDialBx from './SmptmDet'



const EditableTable = ({ vaccData, DOB }) => {

  let vaccDetArr = vaccData;

  console.log(DOB)
  // const [vaccines, setVaccines] = useState([
  //   { name: 'COVID-19', administered: '2021-01-01', due: '2021-07-01', done: false },
  //   { name: 'Flu', administered: '2021-09-01', due: '2022-01-01', done: true }
  // ]);
  const [vaccines, setVaccines] = useState(vaccDetArr);

  // const [newVaccine, setNewVaccine] = useState({ name: '', administered: '', due: '', done: false });

  let navigate = useNavigate()

  // const handleAddVaccine = (event) => {
  //   event.preventDefault();
  //   setVaccines([...vaccines, newVaccine]);
  //   setNewVaccine({ name: '', administered: '', due: '', done: false });
  // };

  const handleToggleDone = (index) => {
    const newVaccines = [...vaccines];
    newVaccines[index].done = !newVaccines[index].done;
    setVaccines(newVaccines);
  };

  const handleSaveVaccDet = () => {
    navigate("../Login")
  }

  const changeAdmnstDt = () => {

  }

  const addDate = (dateString, numberOfDaysToAdd) => {
    
    const date = new Date(dateString);
    date.setDate(date.getDate() + numberOfDaysToAdd);
    const newDateString = date.toISOString().slice(0, 10);
    return newDateString;

  }

  // const onOpenSympDlg = (vaccine) => {
  //   // var
  //   return <SympDialBx props={vaccine}></SympDialBx>
  // }


  return (
    <>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Vaccine Name</th>
            <th>Immunization for</th>
            <th>Due date</th>
            <th>Administered/ Date</th>
            <th>side effects</th>
          </tr>
        </thead>
        <tbody>
          {vaccines.map((vaccine, index) => (
            <tr key={index}>
              <td>{vaccine.VaccineName}</td>
              <td>{vaccine.PreventAgnst}</td>
              <td>{addDate(DOB, vaccine.adminDateStart)}</td>
              {/* <td>{vaccine.administered}</td>           */}
              <td>
                <div style={{ "display": "flex" }}>
                  <Form.Check
                    style={{ 'marginTop': "1.3rem", }}
                    type="switch"
                    id={`done-${index}`}
                    label={vaccine.done ? 'Done' : 'Due'}
                    checked={vaccine.done}
                    onChange={() => handleToggleDone(index)}
                  />
                  <input type="date" className='form-control smallMargin' value={vaccine.administered} onChange={() => { changeAdmnstDt(index) }}></input>
                </div>
              </td>
              <td>
                {/* <button onClick={() => {onOpenSympDlg(vaccine)}} className='btn btn-success smallMargin appButtonPurple'>Show</button> */}
                <SympDialBx props={vaccine}></SympDialBx>
              </td>
            </tr>
          ))}

        </tbody>
      </Table>
      {/* <Button variant="primary" onClick={handleAddVaccine} className="btn btn-success smallMargin appButtonPurple">Save</Button> */}
      <Button variant="primary" onClick={handleSaveVaccDet} className="btn btn-success smallMargin appButtonPurple">Save</Button>

      
    </>
  );
};

export default EditableTable;
