
var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    TestUtils = require('react-addons-test-utils'),
    $ = require('jQuery'),
    CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy(),
        countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown = {spy}/>),
        $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy(),
        countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown = {spy}/>),
        $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '1a9';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
  });
});
