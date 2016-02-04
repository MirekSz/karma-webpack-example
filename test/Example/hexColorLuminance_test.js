var chai = require('../../node_modules/chai/chai');
import Mirek from './Mirek';
var expect = chai.expect;

var hexColorLuminance = require('../../src/Example/hexColorLuminance');

describe("hexColorLuminance", function () {
    it("should return a luminanced color", function () {
        var color = hexColorLuminance.luminate("#fff", "-0.5");
        expect(color).is.not.empty;
    });

    //it("should change the background of an element", function () {
    //    var div = document.createElement('div');
    //    div.style.backgroundColor = hexColorLuminance.luminate("#fff", "-0.5");
    //    expect(div.style.backgroundColor).to.be.empty;
    //});
    it("should jquery exist ", function () {
        var finded = $(document.body);
        expect(finded).not.be.empty;
    });

    it("should add div ", function () {
        $(document.body).append('<div id="workspace"></div>');
        var work = $("#workspace")
        expect(work.length).to.be.gt(0);
    });


    it("should find added div ", function () {

        var work = $("#samil")
        expect(work.length).to.be.gt(0);
    });


});
