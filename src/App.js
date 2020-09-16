import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './stores/rootReducer';
import './styles/index.scss';
import Home from './pages';
import TicketDetail from './pages/ticket-detail';

const store = createStore(reducers, composeWithDevTools());
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Provider store={store}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ticket-detail/:id" children={<TicketDetail />} />
          </Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
