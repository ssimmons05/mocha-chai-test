const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');

//results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);
myNameResult = app.myName('Steve', 'Simmons');

describe('App', function() {
    describe('sayHello()', function(){
        it('app should return hello', function(){
            //let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
    
        it('sayHello should return type string', function() {
            //let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });
    
   
    describe('addNumbers()', function() {
        it('addNumbers should be above 5', function(){
            //let result = app.addNumbers(5,5);
            assert.isAbove(addNumbersResult, 5);
        });
    
        it('addNumbers should return type number', function() {
            //let result = app.addNumbers(5,5);
            assert.typeOf(addNumbersResult, 'number');
        });
    });

    describe('myName', function(){
        it('myName should return string of firstName and lastName', function(){
           assert.equal(myNameResult, 'Steve Simmons'); 
        });

        it('myName return type string', function(){
            assert.typeOf(myNameResult, 'string');
        });
    });
});
    