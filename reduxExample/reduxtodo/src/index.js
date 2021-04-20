import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import initializeStore from './initializeStore';

const store = initializeStore();

const Todo = React.lazy(() => import('./components/Todo/Todo'))
// const Module2 = React.lazy(() => import('./modules/module2'));

function App () {
  return (
    <React.Suspense fallback='loading'>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Todo} />
            {/* <Route path='/module2' exact component={Module2} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.Suspense>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
