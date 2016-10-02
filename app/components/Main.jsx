var React = require('react'),
    Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
        <div className = ''>
          <div className = ''>
          {props.children}
        </div>
      </div>
    </div>
  );
}


module.exports = Main;
