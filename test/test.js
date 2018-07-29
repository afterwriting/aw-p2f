var chai = require('chai');
var App = require('../lib/app');

describe('test', function() {

    it('passes', function() {
        chai.assert.strictEqual(App(2,3), 5);
    });

});