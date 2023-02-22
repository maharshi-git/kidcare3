import React, { useState } from "react";
import { Button, ListGroup, Form } from "react-bootstrap";

function VaccineZeroToSix({ items }) {
  const [editingIndex, setEditingIndex] = useState(-1);
  const [updatedValue, setUpdatedValue] = useState("");

  const handleEdit = (index) => {
    setEditingIndex(index);
    setUpdatedValue(items[index].value);
  };

  const handleCancelEdit = () => {
    setEditingIndex(-1);
    setUpdatedValue("");
  };

  const handleSaveEdit = () => {
    const newItems = [...items];
    newItems[editingIndex] = { ...newItems[editingIndex], value: updatedValue };
    setEditingIndex(-1);
    setUpdatedValue("");
    // handle the updated list of items as needed
  };

  const handleInputChange = (event) => {
    setUpdatedValue(event.target.value);
  };

  items = [{
    "label": "Vacc1",
    "value": "Done"
  },{
    "label": "Vacc2",
    "value": "Done"
  },{
    "label": "Vacc3",
    "value": "Pending"
  }]

  return (
    <ListGroup>
      {items.map((item, index) => (
        <ListGroup.Item key={index}>
          {editingIndex === index ? (
            <Form onSubmit={handleSaveEdit}>
              <Form.Group controlId="editItem">
                <Form.Control type="text" value={updatedValue} onChange={handleInputChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save
              </Button>
              <Button variant="secondary" onClick={handleCancelEdit}>
                Cancel
              </Button>
            </Form>
          ) : (
            <>
              <span>{item.label}: </span>
              <span>{item.value}</span>
              <Button variant="link" onClick={() => handleEdit(index)}>
                Edit
              </Button>
            </>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

function VaccineSixMToOneY({ items }) {
    const [editingIndex, setEditingIndex] = useState(-1);
    const [updatedValue, setUpdatedValue] = useState("");
  
    const handleEdit = (index) => {
      setEditingIndex(index);
      setUpdatedValue(items[index].value);
    };
  
    const handleCancelEdit = () => {
      setEditingIndex(-1);
      setUpdatedValue("");
    };
  
    const handleSaveEdit = () => {
      const newItems = [...items];
      newItems[editingIndex] = { ...newItems[editingIndex], value: updatedValue };
      setEditingIndex(-1);
      setUpdatedValue("");
      // handle the updated list of items as needed
    };
  
    const handleInputChange = (event) => {
      setUpdatedValue(event.target.value);
    };
  
    items = [{
      "label": "Name",
      "value": "Maharshi"
    },{
      "label": "Vaccine",
      "value": "BCG"
    },{
      "label": "Vaccine2",
      "value": "Polio"
    }]
  
    return (
      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item key={index}>
            {editingIndex === index ? (
              <Form onSubmit={handleSaveEdit}>
                <Form.Group controlId="editItem">
                  <Form.Control type="text" value={updatedValue} onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save
                </Button>
                <Button variant="secondary" onClick={handleCancelEdit}>
                  Cancel
                </Button>
              </Form>
            ) : (
              <>
                <span>{item.label}: </span>
                <span>{item.value}</span>
                <Button variant="link" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }

  export { VaccineZeroToSix, VaccineSixMToOneY};
// export VaccineZeroToSix;, VaccineSixMToOneY
// export VaccineSixMToOneY;
