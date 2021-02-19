import  React, { Component } from  'react';
import gameService from "../services/GameService"
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { BiRun } from "react-icons/bi"
import Badge from 'react-bootstrap/Badge'
import { withRouter } from "react-router";
import ElementIcon from './ElementsIcon'

class Game extends Component{
    state = {
        gameService: new gameService,
        elements: [],
        game_id: this.props.match.params.game_id,
        user_1: "",
        user_2: "", 
        element_1: "",
        element_2: "",
        actionSuccess: false,
        winner: "",
        user_1_score: 0,
        user_2_score: 0
    }

    setVariant(user){
        let variant = "secondary"
        if (this.state.winner === user){
            variant = "success"
        }
        return variant
    }

    addScore(winner){
        console.log(winner)
        if(winner === this.state.user_1){
            this.setState({user_1_score: this.state.user_1_score  + 1})
        }
        else if(winner === this.state.user_2){
            this.setState({user_2_score: this.state.user_2_score +1})
        }
    }

    componentDidMount() {
        
        this.elements()
        this.game()
    }
    
    elements = async () =>{
        const elements = await this.state.gameService.getElements();

        this.setState({
            elements: elements.data
        })
    }

    game = async() =>{
        const game = await this.state.gameService.getMatch(this.state.game_id);
        this.setState({
            user_1: game.data.user_1,
            user_2: game.data.user_2
        })
    }

    resetMatch= (e)=>{
        console.log("EXITO")
        this.setState({
            element_1: "",
            element_2: "",
            winner: "",
            user_1_score: 0,
            user_2_score: 0
        })
        //this.props.history.push(`/players`)
    }

    newGame = (e) =>{
        this.props.history.push(`/players`)
    }

    playGame= (e) => {
        const element_1 = this.state.elements[Math.floor(Math.random()*this.state.elements.length)]
        const element_2 = this.state.elements[Math.floor(Math.random()*this.state.elements.length)]

        this.setState({
            element_1: element_1,
            element_2: element_2
        })

        if (element_1.id === element_2.id){
            window.alert("Tie! try again")
        }
        else{
            const newGame= {
                element_user_1: element_1.id,
                element_user_2: element_2.id
            }
            this.state.gameService.updateMatch(this.state.game_id, newGame).then((res=>{
                    this.setState({
                        winner: res.data.data.winner,
                        actionSuccess: true
                    })
                    this.addScore(this.state.winner)
                    }))
        }
    }
    render(){
        return(
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>
                            <Row>
                                <Col>
                                    <Badge pill variant={this.setVariant(this.state.user_1)}>
                                        {this.state.user_1} {this.state.user_1_score}</Badge>  
                                </Col>
                                <Col>
                                    VS 
                                </Col>
                                <Col>
                                    <Badge pill variant={this.setVariant(this.state.user_2)}>
                                        {this.state.user_2} {this.state.user_2_score}</Badge> 
                                </Col>
                            </Row>
                        </h1>
                    </Container>
                </Jumbotron>
                <Row>
                    <Col>
                        <ElementIcon element={this.state.element_1.name}/>
                        <br/>
                        {this.state.element_1.name}
                    </Col>
                    <Col>
                        <Button variant="success" 
                        size="lg" block
                        onClick={this.playGame}>
                            Go! <BiRun/> 
                        </Button>
                    </Col>
                    <Col>
                    <ElementIcon element={this.state.element_2.name}/>
                    <br/>
                    {this.state.element_2.name}
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <Button variant="outline-secondary" onClick={this.resetMatch}>Reset</Button>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <Button variant="outline-info" onClick={this.newGame}>New Game</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(Game)