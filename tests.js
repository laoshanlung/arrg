var should = require('should')
  , _ = require('underscore')._
  , arrg = require('./build/arrg.amd')
  , constructTestFunction = function(argumentList, defaults) {
    defaults = defaults || [];
    return function() {
      return arrg(arguments, argumentList, defaults)  
    }
  }

var correctArgsFormat = function(args) {
  _.isObject(args).should.be.true;
  _.isArray(args).should.be.false;
}

describe('arrg', function(){
  before(function(){
    var defaults = {param1: 1, param2: 2};
    this.defaults = defaults;
    this.testFunction = constructTestFunction(['param1', 'param2'], defaults);
  });

  it('returns the arguments as an object', function(){
    var args = this.testFunction('a', 'b');
    correctArgsFormat(args);
    _.size(args).should.equal(2);

    args.param1.should.equal('a');
    args.param2.should.equal('b');
  });

  it('returns the arguments as an object and applies default values', function(){
    var args = this.testFunction('a');
    correctArgsFormat(args);
    _.size(args).should.equal(2);

    args.param1.should.equal('a');
    args.param2.should.equal(this.defaults.param2);
  });

  it('handles non-argument', function(){
    var args = this.testFunction();
    correctArgsFormat(args);

    args.param1.should.equal(this.defaults.param1);
    args.param2.should.equal(this.defaults.param2);
  });

  it('handles single string/integer/float/jquery argument correctly', function(){
    var testValues = ['a', 99, 3.5, {jquery: '1.9'}, false];
    _.each(testValues, function(testValue){
      var args = this.testFunction(testValue);
      correctArgsFormat(args);
      args.param1.should.not.equal(this.defaults.param1);
      args.param2.should.equal(this.defaults.param2);
    }, this);
  });

  it('handles single object argument correctly', function(){
    var args = this.testFunction({
      param1: 'a',
      param2: 'b'
    });
    correctArgsFormat(args);
    args.param1.should.equal('a');
    args.param2.should.equal('b');

    args = this.testFunction({
      param2: 'b'
    });
    correctArgsFormat(args);
    args.param1.should.equal(this.defaults.param1);
    args.param2.should.equal('b');
  });

  it('handles array argument correctly', function(){
    var param1 = ['a', 'b'];
    var args = this.testFunction(param1);
    correctArgsFormat(args);

    args.param1.should.equal(param1);
    args.param2.should.equal(this.defaults.param2);
  });
});