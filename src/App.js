import './App.css';
import UserList from './components/UsersList'
import UserSave from './components/UserSave'
import Game from './components/Game'
import Navigation from './components/Navigation'
import { Container, Row, Col} from "react-bootstrap"
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <br/>
        <h1>Rock, Paper, Scissors, Lizard, Spock</h1>
        <div className="container p-4">
            <Route path="/" exact component={UserList}></Route>
          <Row>
            <Col>
              <Route path="/players" exact component={UserSave}></Route>
            </Col>
          </Row>
          <Row>
            <Col>
                <Route path="/game" exact component={Game}></Route>
              </Col>
          </Row>
        </div>
      </Router>
    </div>
  );
}

export default App;
