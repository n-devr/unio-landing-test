import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ScheduleADemo from './components/ScheduleADemo';

import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <React.Fragment>

        {/* Navbar */}
        <Navbar bg="prussian-blue" variant="dark" expand="sm">
            <Navbar.Brand href="#">
                <img src={logo} className="logo" alt="Unio Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsiveNav" />
            <Navbar.Collapse id="responsiveNav">
                <Nav.Link href="#schedule-a-demo">Schedule a Demo</Nav.Link>
            </Navbar.Collapse>
        </Navbar>

        {/* Schedule a Demo */}
        <section id="schedule-a-demo" className="py-3 text-center">
            <h3>Schedule a Demo</h3>
            <ScheduleADemo 
                meetingsURL="https://meetings.hubspot.com/ryan-diehl/uniocare-app-demo?embed=true"
                embedScriptURL="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
            />
        </section>
        
    </React.Fragment>
  );
}

export default App;
