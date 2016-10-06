var React = require('react'),
    Clock = require('Clock'),
    CountdownForm = require('CountdownForm'),
    Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus){
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
  startTimer: function(){
    this.timer = setInterval(() =>{
      var newCount = this.state.count - 1;

      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0){
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  clearTimer: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },
  stopTimer: function(){
    this.setState({count: 0});
  },
  handleSetCountdown: function (seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus){
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function(){

    var {count, countdownStatus} = this.state,
        renderControlArea = () => {
          if(countdownStatus !== 'stopped'){
            return <Controls countdownStatus = {countdownStatus} onStatusChange = {this.handleStatusChange}/>
          }else{
            return <CountdownForm onSetCountdown = {this.handleSetCountdown}/>
          }
        };

    return (
      <div>
        <Clock totalSeconds = {count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
