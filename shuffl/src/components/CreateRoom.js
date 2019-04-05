import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';

export class CreateRoom extends Component {
  render() {
    return (
            <div className="createRoom">
                <Form>
                    <Form.Group controlId={"form"}>
                        <Form.Control placeholder={"Room Name"}/>
                    </Form.Group>
                    <Form.Group controlId={"form"}>
                        <Form.Control as="select">
                            <option>Pop</option>
                            <option>Hip-Hop</option>
                            <option>Rock</option>
                            <option>R&B</option>
                            <option>Indie</option>
                            <option>K-Pop</option>
                            <option>Jazz</option>
                            <option>Classical</option>
                            <option>Metal</option>
                            <option>Punk</option>
                            <option>Reggae</option>
                            <option>Electronic</option>
                        </Form.Control>
                    </Form.Group>
                    <div className="createRoomButtons">
                    <button className=" button cancel">Cancel</button> <button className="button primary">Create</button>
                    </div>
                </Form>
            </div>

    )
  }
}

export default CreateRoom
