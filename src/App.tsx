import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ScheduleADemo from './components/ScheduleADemo';

import './App.scss';

function App() {
  return (
    <React.Fragment>

        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="sm">
            <Navbar.Brand href="#">Unio Test Harness</Navbar.Brand>
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
