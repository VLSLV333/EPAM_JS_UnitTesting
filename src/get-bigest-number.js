function getBigestNumber(fir,sec, ...els){
    let maxNumberOfExtraArgumentsAllowed = 8
    if (sec === undefined){
        throw new Error('Not enough arguments')
    } else if (els.length > maxNumberOfExtraArgumentsAllowed){
        throw new Error('Too many arguments')
    } else if (typeof fir !== 'number' || typeof sec !== 'number'){
        throw new Error('Wrong argument type')
    } else {
        els.forEach( (num) => {
            if (typeof num !== 'number'){
                throw new Error('Wrong argument type')
            }
        })
    }
    return Math.max(fir,sec,...els)
}
module.exports = getBigestNumber;
