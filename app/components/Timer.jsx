var React = require('react'),
    Clock = require('Clock'),
    Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function(){
    return{
      count: 0,
      timerStatus: 'paused'
    }
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch(this.state.timerStatus){
        case 'started':
          this.startTimer();
          break;

        case 'stopped':
          this.stopTimer();

        case 'paused':
          this.clearTimer();
          break;

      }
    }
  },
  componentWillUnmount: function(){
    this.clearTimer();
  },
  handleStatusChange: function(newStatus){
    this.setState({
      timerStatus: newStatus
    });
  },
  startTimer: function(){
    this.timer = setInterval(() =>{
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  },
  clearTimer: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },
  stopTimer: function(){
    this.setState({count: 0});
  },
  handleSetTimer: function (seconds){
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  },
  render: function(){

    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className = 'page-title'>Timer</h1>
        <Clock totalSeconds = {count}/>
        <Controls countdownStatus = {timerStatus} onStatusChange = {this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;
