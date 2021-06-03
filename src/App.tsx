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
        <ScheduleADemo />
    </React.Fragment>
  );
}

export default App;
