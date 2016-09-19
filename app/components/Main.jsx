var React = require('react');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <h2>React mode, engaged</h2>
          {props.children}
        </div>
      </div>
    </div>
  );
}


module.exports = Main;
