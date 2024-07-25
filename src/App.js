import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCalendarCheckFill } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";
import Search from "./components/Search.js";
import AddAppointment from './components/AddAppointment.js';

function App() {
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
      </Container>
    </div>
  );
}

export default App;
