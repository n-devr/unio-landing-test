import React from 'react';
import { Navbar } from 'react-bootstrap';
import ScheduleADemo from './components/ScheduleADemo';

import './App.scss';

function App() {
  return (
    <React.Fragment>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Unio Test Harness</Navbar.Brand>
        </Navbar>
        <ScheduleADemo 
            meetingsURL="https://meetings.hubspot.com/rae-morales?embed=true"
            embedScriptURL="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        />
    </React.Fragment>
  );
}

export default App;
