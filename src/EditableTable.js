import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";

//components
import SympDialBx from './SmptmDet'



const EditableTable = ({ vaccData, DOB }) => {

  let vaccDetArr = vaccData;

  const [vaccines, setVaccines] = useState(vaccDetArr);

  // let navigate = useNavigate()

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



  const changeAdmnstDt = () => {

  }

  const addDate = (dateString, numberOfDaysToAdd) => {

    const date = new Date(dateString);
    date.setDate(date.getDate() + numberOfDaysToAdd);
    const newDateString = date.toISOString().slice(0, 10);
    return newDateString;

  }

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
              <td style={{ "verticalAlign": "middle" }}>{vaccine.VaccineName}</td>
              <td style={{ "verticalAlign": "middle" }}>{vaccine.PreventAgnst}</td>
              <td style={{ "verticalAlign": "middle" }}>{addDate(DOB, vaccine.adminDateStart)}</td>

              <td style={{ "verticalAlign": "middle" }}>
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
              <td style={{ "verticalAlign": "middle" }}>
                <SympDialBx props={vaccine}></SympDialBx>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <Button variant="primary" onClick={handleSaveVaccDet} className="btn btn-success smallMargin appButtonPurple">Save</Button> */}

    </>
  );
};

export default EditableTable;
