import  React, { Component } from  'react';
import userService from "../services/UserService"
import { Form, Button} from "react-bootstrap"

class UserSave extends Component{
    state = {
        userService: new userService(),
        name: "",
        user1: {},
        user2: {},
        actionSuccess: false,
        
    }

    onSubmit = (e) =>{
        const newUser = {
            name: this.state.name };

        this.state.userService.createUSer(newUser).then((res)=>{
            this.setState({
                user1: {
                    'name': res.data.data.name,
                    'score': res.data.data.score
                },
                actionSuccess:true
            })
            console.log(this.state.user1)
        })
        e.preventDefault();
    }

    onChange  = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" 
                    placeholder="Enter name"
                    name="name" 
                    value={this.state.name}
                    onChange={this.onChange}
                    />
                    <Form.Text className="text-muted">
                    Enter your name to start de Game.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default UserSave;