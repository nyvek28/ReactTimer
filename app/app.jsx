var React = require('react'),
    ReactDOM = require('react-dom'),
    Main = require('Main'),
    Timer = require('Timer'),
    Countdown = require('Countdown'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!AppStyles')

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path = "/" component = {Main}>
      <Route path = "countdown" component = {Countdown}/>
      <IndexRoute component = {Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
