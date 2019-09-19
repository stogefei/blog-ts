import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.less';

ReactDOM.render(
  <BrowserRouter>
  <div className='body-box'>
      <Switch>
          {/*<App />*/}
          <Route path='/' exact component={App} />
      </Switch>
  </div>
</BrowserRouter>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
