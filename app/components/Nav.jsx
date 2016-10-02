var React = require('react'),
    {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return (
      <div className = 'top-bar'>
        <div className = 'top-bar-left'>
          <ul className = 'menu'>
            <li className = 'menu-text bold'>
              ReactTimer
            </li>
            <li>
              <IndexLink to = '/' activeClassName = 'active-link'>Timer</IndexLink>
            </li>
            <li>
              <Link to = '/countdown' activeClassName = 'active-link'>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className = 'top-bar-right'>
          <ul className = 'menu'>
            <li className = 'menu-text bold'>
              Created by <a href = 'http://www.kevynquiros.com' target = '_blank'>Kevyn Quiros</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
