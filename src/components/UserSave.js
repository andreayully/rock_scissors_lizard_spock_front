import  React, { Component } from  'react';
import Game from './Game'
import userService from "../services/UserService"
import gameService from "../services/GameService"
import { Form, Button, Row, Col} from "react-bootstrap"
import { withRouter } from "react-router";
//import { Container, } from "react-bootstrap"

class UserSave extends Component{
    state = {
        userService: new userService(),
        gameService: new gameService(),
        name_1: "",
        name_2: "",
        game_id: "",
        actionSuccess: false
        
    }

    onSubmit = (e) =>{
        if (this.state.name_1 && this.state.name_2){
            const newUsers = {
                user_1: this.state.name_1,
                user_2: this.state.name_2
            }
            this.state.gameService.createInitialMatch(newUsers).then((res)=>{
                this.setState({
                    actionSuccess:true,
                    game_id: res.data.data.id,
                    name_1: "",
                    name_2: ""
                })
                
            })
            console.log(`/game/${this.state.game_id}/`)
            //this.props.history.push(`/game/${this.state.game_id}/`)
        }
        
        e.preventDefault();
        
    }

    onChange  = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <Row>
                    <Col>
                        <h2>Player 1</h2>
                        <h1>{this.state.game_id}</h1>
                        <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" 
                            placeholder="Enter name"
                            name="name_1" 
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
                    </Col>
                    <Col>
                        <h2>Player 2</h2>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" 
                                placeholder="Enter name"
                                name="name_2" 
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
                    </Col>
                </Row>
                {/* <Row>
                    <Game game_id={this.state.game_id}/>
                </Row> */}
            </div>         
        )
    }
}

export default withRouter(UserSave);