import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import { Home, Users } from './pages';
import { configureStore, history } from './utils';

const store = configureStore();

class App extends React.PureComponent {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/users" component={Users} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
