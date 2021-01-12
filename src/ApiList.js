import React, { useState, useEffect } from 'react'
import {Table} from 'react-bootstrap'
function ApiList() {
    const [apidata,setApiData] = useState([]);

    useEffect(() => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then((data) => {
                //console.warn('data', data)
                data.json().then((result)=>{
                    console.warn('data', result)
                    setApiData(result.data);
                })
            })
    },[])
    return (
        <div>
            <h2>Dummy Employee List From Live Data API CALL</h2>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>EMP ID</th>
                            <th>Employee Name</th>
                            <th>Employee Age</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            apidata.map((item, index) => <tr key={index}>
                                <td>{index}</td>
                                <td>{item.id}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_age}</td>
                                <td>{item.employee_salary}</td>
                            </tr>)

                        }
                    </tbody>
                </Table>
        </div>
    )
}

export default ApiList;