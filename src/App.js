import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Home'
import Contact from './Contact'
import ComponentStateTest from './ComponentStateTest'
import About from './About'
import ContactHookFunction from './ContactHookFunction'
import Users from './Users'
import ExampleBootstrap from './ExampleBootstrap'
import CreateUser from './CreateUser'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import { Nav, Navbar, FormControl, Form, Button } from 'react-bootstrap'
import ApiList from './ApiList'

function App() {
  const [ename, setEName] = useState("Sajid")
  return (
    <div className="App">
      <Router>
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link href="#features"><Link to='/About'>About</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to='/Contact'>Contact</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to='/ComponetState'>Componet State</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to='/ComponentHooks'>Contact Hooks</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to='/createuser'>Create User</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to='/Listinguser'>Lising Users</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to='/bootstrapexample'>Bootstrap Example</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to='/dummyapilist'>Dummy API List</Link></Nav.Link>
            </Nav>
            {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
          </Navbar>
          <br />
          {/* <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar> */}

          <br />
          {/* <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar> */}
        </>
        <div>
          <Switch>

            <Route path="/About">
              <About />
            </Route>
            <Route path="/ComponetState">
              <ComponentStateTest />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/ComponentHooks">
              <ContactHookFunction />
            </Route>
            <Route path="/createuser">
              <CreateUser />
            </Route>
            <Route path="/Listinguser">
              <Users />
            </Route>
            <Route path="/bootstrapexample">
              <ExampleBootstrap />
            </Route>
            <Route path="/dummyapilist">
              <ApiList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>
      </Router>
      {/* <About />
      <Contact></Contact>
      <ComponentStateTest></ComponentStateTest> */}
      {/* <ContactHookFunction /> */}
      {/* Send parameter value scope sent to one from to another form when we send properies you can update those one receive not update any value */}
      {/* <About name="Sajid"/> */}
      {/* <About ename={ename}/>
      <ContactHookFunction ename={ename}/>
      <button onClick={()=>{setEName("sajid ali useState by props")}}>Update useState</button> */}
      {/* <Contact /> */}
      {/* <Users /> */}
      {/* <ExampleBootstrap/> */}
      {/* <CreateUser/> */}
    </div>
  );
}

export default App;
