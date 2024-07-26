import { ListGroupItem, Button } from "react-bootstrap"

const AppointmentInfo = ({appointment, onDeleteAppointment}) => {
    return (
        <>
            <ListGroupItem>
                <p><small>Date: {appointment.aptDate}</small></p>
                <p><strong>First Name: {appointment.firstName}</strong></p>
                <p><strong>Last Name: {appointment.lastName}</strong></p>
                <p><strong>Notes: {appointment.aptNotes}</strong></p>
                <Button onClick={() => onDeleteAppointment(appointment.id)} size="sm" variant="danger">Delete</Button>
            </ListGroupItem>
        </>
    )
}

export default AppointmentInfo;