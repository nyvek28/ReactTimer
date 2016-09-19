var React = require('react'),
    ReactDOM = require('react-dom'),
    Main = require('Main'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!AppStyles')

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path = "/" component = {Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
