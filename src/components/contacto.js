import React from 'react';
import { Form } from 'react-bootstrap';

const Contacto = () => {
    return (
        <Form className="contact-form" id='contact'>
            <h2 className="text-center">Contacto</h2>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <button type="submit">Submit</button>
        </Form>
    );
}

export default Contacto;