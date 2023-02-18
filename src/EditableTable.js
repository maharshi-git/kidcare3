import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const EditableTable = () => {
  const [vaccines, setVaccines] = useState([
    { name: 'COVID-19', administered: '2021-01-01', due: '2021-07-01', done: false },
    { name: 'Flu', administered: '2021-09-01', due: '2022-01-01', done: true }
  ]);
  const [newVaccine, setNewVaccine] = useState({ name: '', administered: '', due: '', done: false });

  const handleAddVaccine = (event) => {
    event.preventDefault();
    setVaccines([...vaccines, newVaccine]);
    setNewVaccine({ name: '', administered: '', due: '', done: false });
  };

  const handleToggleDone = (index) => {
    const newVaccines = [...vaccines];
    newVaccines[index].done = !newVaccines[index].done;
    setVaccines(newVaccines);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Vaccine Name</th>
          <th>Administered/Due date</th>
          <th>Due/Done</th>
        </tr>
      </thead>
      <tbody>
        {vaccines.map((vaccine, index) => (
          <tr key={index}>
            <td>{vaccine.name}</td>
            <td>{vaccine.administered}/{vaccine.due}</td>
            <td>
              <Form.Check
                type="switch"
                id={`done-${index}`}
                label={vaccine.done ? 'Done' : 'Due'}
                checked={vaccine.done}
                onChange={() => handleToggleDone(index)}
              />
            </td>
          </tr>
        ))}
        <Button variant="primary" onClick={handleAddVaccine} className="btn btn-success smallMargin appButtonPurple">Submit</Button>
      </tbody>
    </Table>
  );
};

export default EditableTable;
