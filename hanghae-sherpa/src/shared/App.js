// import logo from './logo.svg';
import './App.css';

import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        {/* <Route path="/" exact component={}/> */}
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
