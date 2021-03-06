import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Loadable from 'react-loadable';
// import * as Loadable from 'react-loadable';
import './styles/index.less';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './views/App';
import BlogDetail from './views/BlogDetail';
// const BlogDetail = Loadable(() => import('./views/BlogDetail'))
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
  <div className='body-box'>
      <Switch>
          {/*<App />*/}
          <Route path='/' exact={true} component={App} />
          <Route path='/blogdetail/:id' component={BlogDetail} />
      </Switch>
  </div>
</BrowserRouter>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
