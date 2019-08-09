var chai = require('chai');
var assert = chai.assert;
var sinon = require('sinon');
var Cow = require("./../../src/Cow");
var expect = chai.expect;

describe('Test Spec', function () {
    var testValue = 100;

    beforeEach(function () {


        testValue = 100;

    });

    afterEach(function () {

        testValue = 100;

    });

    it('basic test', function () {
        var t = testValue / 5;

        assert.equal(t, 20);
    });


}); //end describe for file




describe('Cow tests', function () {
    var cow = null;
    var kateTheCow = null;

    beforeEach(function () {


        cow = new Cow();
        kateTheCow = new Cow("Kate");


    });

    it('cow default name', function () {
        assert.equal(cow.name, "esmirelda");
        assert.equal(kateTheCow.name, "Kate");

    });

    it('cow change name', function () {
        var newName = 'fred';
        cow.setName(newName);

        assert.equal(cow.name, newName)

    });

    it('cow create test', function () {
        assert.equal(typeof cow.greets, "function")

    });

}); //end describe for cow tests


describe("#greets", function () {
    it("should throw if no target is passed in", function () {
        expect(function () {
            (new Cow()).greets();
        }).to.throw(Error);
    });

    it("should greet passed target", function () {
        var greetings = (new Cow("Kate")).greets("Baby");
        expect(greetings).to.equal("Kate greets Baby!");
    });


    it("should pass an error if no target is passed", function (done) {
        (new Cow()).lateGreets(null, function (err, greetings) {
            expect(err).to.be.an.instanceof(Error);
            done();
        });

    });


    it("should greet passed target after one second", function (done) {

        (new Cow("Kate")).lateGreets("Baby", function (err, greetings) {
            expect(err).to.equal(null);
            expect(greetings).to.equal("Kate greets Baby!");
            done();
        });

    });

   it("no bozos please", function (done) {

        (new Cow("Kate")).lateGreets("Bozo", function (err, greetings) {
           // console.log("yyyyy "+err.message+" "+greetings)
            expect(err).to.not.equal(null);
            expect(err.message).to.equal("No Bozos!");
            done();
        });

    });





});




