import React, { useState } from 'react';

const Form = () => {
  // Define a single state object to hold all form input values and submitted data
  const [data, setData] = useState({
    name: '',
    email: '',
    submittedName: '',
    submittedEmail: ''
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setData((prevData) => ({
      ...prevData,
      submittedName: prevData.name,
      submittedEmail: prevData.email
    }));
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      <form className='col-4 mx-auto my-5' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            value={data.name}
            onChange={handleChange} // Update the state on input change
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            value={data.email}
            onChange={handleChange} // Update the state on input change
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <div className='container'>
        <h1>Name: <span className='p'>{data.submittedName}</span></h1>
        <h2>Email: <span className='p'>{data.submittedEmail}</span></h2>
      </div>
    </>
  );
}

export default Form;
