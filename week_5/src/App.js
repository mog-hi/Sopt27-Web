import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main';
import Member from './pages/member/Member';
import MainHeader from './components/header/MainHeader';

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={MainHeader}/>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/members" component={Member} />
          <Route path="*">
            <h1> 404 NOT FOUND </h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
