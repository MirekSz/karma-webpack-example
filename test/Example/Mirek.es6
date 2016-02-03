import chai from 'chai';
var expect = chai.expect;
class Mirek{}
describe("ES6", function () {
    it("should create instance from class", function () {
        expect(new Mirek() instanceof Mirek).to.be.true
    })
});