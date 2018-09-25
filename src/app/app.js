/*global document:true*/
/*eslint no-undef: "error"*/

import React from 'react';
import { render } from 'react-dom';
import { Container } from './Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from './components/About';
import { res } from './components/res'
import { ListCategories } from './components/ListCategories'
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Container} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/test/:id" component={res} />
          <Route path="/categories/:name/:value?" component={ListCategories} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


render(<App />, document.getElementById("root"));
