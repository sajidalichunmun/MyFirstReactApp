import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'

function ExampleBootstrap() {
    const user = [
        { name: 'sajid Ali', age: 20, address: 'xxx' },
        { name: 'Saquib Ali', age: 15, address: 'xxx' },
        { name: 'Soban Ali', age: 14, address: 'xxx' },
        { name: 'Israt Parween', age: 35 },
        { name: 'Imran Ahmmed', age: 27 },

    ];
    return (
        <div>
            <h3>React Bootstrap Example</h3>
            <>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                <Button variant="link">Link</Button>
            </>
            <br /><br />
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item, index) => <tr >
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                            </tr>)

                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ExampleBootstrap;