import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchTweet from './components/SearchTweet'
import TakeHistory from './components/TakeHistory'

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/" component={SearchTweet} />
            <Route exact path="/history" component={TakeHistory} />
        </Switch>
      </Router>
  )
}

export default App;
