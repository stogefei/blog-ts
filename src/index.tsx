import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.less';
// import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
