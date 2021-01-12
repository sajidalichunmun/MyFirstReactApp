import React, { Fragment, useState } from 'react'

function Users() {
    const [user] = useState([
        { name: 'sajid Ali', age: 20, address: 'xxx' },
        { name: 'Saquib Ali', age: 15, address: 'xxx' },
        { name: 'Soban Ali', age: 14, address: 'xxx' },
        { name: 'Israt Parween', age: 35 },
        { name: 'Imran Ahmmed', age: 27 },

    ]);

    const userLists = [
        { name: 'sajid Ali', age: 20, address: 'xxx' },
        { name: 'Saquib Ali', age: 15, address: 'xxx' },
        { name: 'Soban Ali', age: 14, address: 'xxx' },
        { name: 'Israt Parween', age: 35 },
        { name: 'Imran Ahmmed', age: 27 },

    ]

    return (
        <div>
            <h1>User Listing is hear</h1>
            {
                user.map((item, index) =>

                        <div key={index}
                        >{item.name},{item.age},{item.address}
                        </div>
                    )
            }
            <br/>
            <h3>User Listing by span tag</h3>
            {
                userLists.map((item, index) =>

                    <div key={index}>
                        <span>{item.name}</span>
                        <span>{item.age}</span>
                        <span>{item.address}</span>
                    </div>
                )
            }
            <h3>Checking Condition</h3>
            {
                userLists.length === 5 ? <div>Yes, This is right</div>: <div>No lenght should be 5</div>
            }
            <h3>Checking Condition</h3>
            {
                userLists.length === 4 ? <div>Yes, This is right</div>: <div>No lenght should be 5</div>
            }
            <>
                <h4>Fragment Example1 remove div tag tree</h4>
                <h4>Fragment Example2</h4>
            </>
            <Fragment>
                <h4>Fragment Example1 remove div tag tree</h4>
                <h4>Fragment Example2</h4>
            </Fragment>
        </div>
    )
}

export default Users;