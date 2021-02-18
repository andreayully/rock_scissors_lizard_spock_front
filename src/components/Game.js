import { Divider } from '@material-ui/core';
import  React, { Component } from  'react';
import gameService from "../services/GameService"
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { BiRun } from "react-icons/bi"
import { FaCalendar } from 'react-icons/fa'


export default class Game extends Component{
    state = {
        gameService: new gameService,
        elements: [],
        user_1: "andreayully",
        user_2: "ted",
        element_1: "",
        element_2: "",
        match: {}

    }
    
    componentDidMount() {
        
        this.elements()
    }
    
    elements = async () =>{
        const elements = await this.state.gameService.getElements();

        this.setState({
            elements: elements.data
        })
        console.log("elementos", this.state.elements)

    }

    resetMatch= (e)=>{
        console.log("EXITO")
        this.setState({
            user_1: "",
            user_2: ""
        })
    }

    render(){
        return(
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>{this.state.user_1} vs {this.state.user_2}</h1>
                        <p>
                        </p>
                    </Container>
                </Jumbotron>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>
                        <Button variant="success" size="lg" block>
                            Go! <BiRun/> 
                        </Button>
                    </Col>
                    <Col>3 of 3</Col>
                </Row>
                <br/>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <Button variant="outline-secondary" onClick={this.resetMatch}>Reset</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}