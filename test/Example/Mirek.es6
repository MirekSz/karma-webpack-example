import chai from 'chai';
var expect = chai.expect;
import request from 'superagent';
import treeView from './template.hbs';
class Mirek {
}
describe("ES6", function () {
    it("should create instance from class", function () {
        expect(new Mirek() instanceof Mirek).to.be.true
    })
    it("should readtemplate", function () {
        expect(treeView()).to.be.eq('ala ma kota')
    })
    it("should load google ajax", function (done) {
        request
            .get('/')
            .end(function (err, res) {
            expect(res.statusCode).to.be.eq(200)
                done();
            });
    })
});