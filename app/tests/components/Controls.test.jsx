var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    TestUtils = require('react-addons-test-utils'),
    $ = require('jQuery'),
    Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus = 'started'></Controls>),
          $el = $(ReactDOM.findDOMNode(controls)),
          $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);

    });

    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus = 'paused'></Controls>),
          $el = $(ReactDOM.findDOMNode(controls)),
          $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);

    });

  });

});
