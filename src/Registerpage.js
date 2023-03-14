// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const PurpleForm = (navigate) => {

//     // const history = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     surname: '',
//     address: '',
//     phone: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // You can replace the console.log with your own logic to submit the form data
//   };

//   return (
//     <Form onSubmit={handleSubmit} className="smallMargin">
//       <Form.Group controlId="formName" className='smallMargin'>
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" className='' name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
//       </Form.Group>

//       <Form.Group controlId="formSurname" className='smallMargin'>
//         <Form.Label>Surname</Form.Label>
//         <Form.Control type="text" name="surname" placeholder="Enter your surname" value={formData.surname} onChange={handleChange} required />
//       </Form.Group>

//       <Form.Group controlId="formAddress" className='smallMargin'>
//         <Form.Label>Address</Form.Label>
//         <Form.Control type="text" name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required />
//       </Form.Group>

//       <Form.Group controlId="formPhone" className='smallMargin'>
//         <Form.Label>Phone Number</Form.Label>
//         <Form.Control type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
//       </Form.Group>

//       <Button variant="primary" type="submit" className='smallMargin appButtonPurple'>Register</Button>
//       <p className='smallMargin'>Already have an account? <Link to="/Login">Login</Link></p>
//     </Form>
//   );
// };

// export default PurpleForm;


import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" style={{display: "flex", marginBottom: "1rem"}}>
          <Form.Label style={{marginTop: "3px", width: "5rem", marginRight: "1rem"}}>Name:</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="address" style={{display: "flex", marginBottom: "1rem"}}>
          <Form.Label style={{marginTop: "3px", width: "5rem", marginRight: "1rem"}}>Address:</Form.Label>
          <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="phone" style={{display: "flex", marginBottom: "1rem"}}>
          <Form.Label style={{marginTop: "3px", width: "5rem", marginRight: "1rem"}}>Phone:</Form.Label>
          <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="email" style={{display: "flex", marginBottom: "1rem"}}>
          <Form.Label style={{marginTop: "3px", width: "5rem", marginRight: "1rem"}}>Email:</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Button type="submit" variant="primary" className='smallMargin appButtonPurple'>Register</Button>
        <p className='smallMargin'>Already have an account? <button className="transparentBtn" onClick={() => {navigate("../Login")}}>Login</button></p>
      </Form>
    </Container>
  );
}

export default RegistrationForm;
