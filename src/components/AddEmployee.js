import React, { useState } from 'react';
const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    salary: '',
    age: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee added:', employee);
    setEmployee({ name: '', salary: '', age: '' , image: '' });
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={employee.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Salary:
          <input type="text" name="salary" value={employee.salary} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="age" value={employee.age} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Image:
          <input type="text" name="image" value={employee.image} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Save Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
