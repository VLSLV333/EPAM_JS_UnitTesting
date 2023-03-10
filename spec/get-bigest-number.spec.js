const biggestNumFunc = require('../src/get-bigest-number');
describe('Testing get the biggest number function', () => {
    let _1 = 1 
    let _2 = 2
    let _3 = 3
    let _4 = 4
    let _5 = 5
    let _6 = 6
    let _7 = 7
    let _8 = 8
    let _9 = 9
    let _10 = 10
    let _11 = 11
    it('should throw Error "Not enough arguments" if 0-1 arguments are provided', () => {
        expect( function(){ 
            biggestNumFunc();
        }).toThrow(new Error('Not enough arguments'))
    })
    it('should throw Error "Too many arguments" if 11+ arguments are provided', () => {
        expect( function(){
            biggestNumFunc(_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11);
        }).toThrow(new Error('Too many arguments'))
    })
    it('should throw Error "Wrong argument type" if atlest one argument is not number', () => {
        expect( function(){
            biggestNumFunc({},_1,[_2]);
        }).toThrow(new Error('Wrong argument type'))
    })
    it('should return the biggest provided number', () => {
        expect(biggestNumFunc(_1,_5,_7,_3,_2)).toBe(_7)
    })
});
