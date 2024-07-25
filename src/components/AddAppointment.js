import { Col, Card, Form, Row, Button } from "react-bootstrap";

const AddAppointment = () => {
    return (
        <>
            <Col md="8">
                <Card className="mb-3">
                    <Card.Header>Add Appointment</Card.Header>
                    <Card.Body>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Row>
                            <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Appointment Date</Form.Label>
                                    <Form.Control type="Date" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Appointment Time</Form.Label>
                                    <Form.Control type="Time" />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3">
                                    <Form.Label>Notes</Form.Label>
                                    <Form.Control as="text-area" placeholder="Notes" />
                            </Form.Group>
                            <Button variant="primary">Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default AddAppointment;