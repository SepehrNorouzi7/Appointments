import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCalendarCheckFill } from "react-icons/bs";
import { Col, Container, Row, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Search from "./components/Search.js";
import AddAppointment from './components/AddAppointment.js';
import AppointmentInfo from './components/AppointmentInfo.js';
import { useState } from "react";

function App() {

  let [appointmentList, setAppointmentList] = useState()

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-light mt-3"><BsCalendarCheckFill /> Appointments</h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <AddAppointment />
        </Row>
        <Row className='justify-content-center'>
          <Col md={3}>
            <Search />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={3}>
            <Card className="mb=3">
              <Card.Header>Appointments</Card.Header>
              <ListGroup variant="flush">
                {appointmentList.map(appointment => (
                  <AppointmentInfo key={appointment.id} appointment={appointment}
                  onDeleteAppointment={
                    appointmentId => setAppointmentList(appointmentList.filter(
                      appointment => appointment.id !== appointmentId
                    ))
                  } />
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
