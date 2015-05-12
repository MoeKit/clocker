var Clocker = require('../index');
describe('countdown', function() {
    it('normal usage', function() {
        var clocker = new Clocker('2016/06/01').on('tick',function(event){
           console.log('tick'); 
        });
    });
});