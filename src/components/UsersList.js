import React, { Component } from "react";
import userService from "../services/UserService"
import { DataGrid } from '@material-ui/data-grid';
import {Container, Row, Col} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';

export default class GameUserList extends Component {

    state = {
        userService: new userService(),
        userList: []
    }

    componentDidMount() {
        
        this.userList()

    }

    userList = async () =>{
        const userList = await this.state.userService.getUsersList();

        this.setState({
            userList: userList.data
        })

    }

    columns = [
        {field: 'name', headerName: 'Name', width: 150 },
        {field: 'score', headerName: 'Score', width: 130 },
    ]
    render(){
        
        return(
            <Container fluid>
                <Row className="justify-content-md-center">
                    <div style={{ height: 400, width: '50%', textAlign:"center"}}>
                        <DataGrid
                        rows={this.state.userList} 
                        columns={this.columns} 
                        pageSize={5}/>
                    </div>
                </Row>
            </Container>
        )
    }
}