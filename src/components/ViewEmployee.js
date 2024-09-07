import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockEmployees } from '../mockData'; 

const ViewEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

/*

  useEffect(() => {
    
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assume data.data contains the employee list
        const firstTenEmployees = data.data.slice(0, 10);
        setEmployees(firstTenEmployees);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleAddNew = () => {
    navigate('/add-employee');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
*/



  useEffect(() => {
    setEmployees(mockEmployees);
    setLoading(false);
  }, []);

  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  const handleAddNew = () => {
    navigate('/add-employee');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Employee List</h2>
      <button onClick={handleAddNew}>+ Add New</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_salary}</td>
              <td>{employee.employee_age}</td>
               <td>{employee.employee_image}</td>
              <td>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEmployee;
