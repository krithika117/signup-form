import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpFunctionalComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [platform, setPlatform] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !address || !platform) {
      alert('Please fill in all the fields.');
      return;
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert(`Hello ${firstName}!`);
  
  };

  return (
    <div className="text-light p-3">
      <h3 className="mb-3">Sign Up with Functional component</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control form-control-dark text-light bg-dark"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              aria-describedby="firstName"
            />
          </div>
          <div className="col">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control form-control-dark text-light bg-dark"
              required
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              aria-describedby="lastName"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control form-control-dark text-light bg-dark"
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control form-control-dark text-light bg-dark"
            required
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="Platform" className="form-label">
            Platform
          </label>
          <select
            className="form-select form-select-dark bg-dark text-light"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            id="Platform"
          >
            <option value="">Select an option</option>
            <option value="windows">Windows</option>
            <option value="ios">iOS</option>
            <option value="linux">Linux</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpFunctionalComponent;
