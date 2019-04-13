import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { Socket } from 'dgram';

export class CreateRoom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            UserList:[this.props.Username],
            RoomName: '',
            Genre: 'Pop'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value });
    };


    handleSubmit = (event) => {
         event.preventDefault();
        // axios.post('http://localhost:4000/chatrooms/add', this.state, {withCredentials: true})
        //     .then(response => {
        //         alert('Success');
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

        this.props.socket.emit('make room', this.state, this.props.UserId);
    };

    handleCancel = (event) => {
        event.preventDefault();
        this.props.operation();
    };


    // {()=>{this.props.setRoomId()}}
  render() {
    return (
            <div className="createRoom">
                <Form>
                    <Form.Group controlId={"form"}>
                        <Form.Control name={'RoomName'} placeholder={"Room Name"} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId={"form"}>
                        <Form.Control name={'Genre'} as="select" onChange={this.handleChange}>
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
                    <button onClick={this.handleCancel} className=" button cancel">Cancel</button> <button onClick={this.handleSubmit} className="button primary">Create</button>
                    </div>
                </Form>
            </div>

    )
  }
}

export default CreateRoom
