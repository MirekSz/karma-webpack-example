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
            .get('www.googe.pl')
            .end(function (err, res) {
                console.log(res.body);
                done();
            });
    })
});