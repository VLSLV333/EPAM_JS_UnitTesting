const BDClass = require('../src/birthday.service');
describe('Testing BirthDayClass, which logs days to or days passed birthday', () => {
    let BirthDayClass = new BDClass()
    let today = new Date()
    let tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    let yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)
    let futureYear = 2250
    let futureMonth = 5
    let futureDay = 22
    let future = new Date(futureYear, futureMonth, futureDay)
    let pastYear = 1980
    let pastMonth = 7
    let pastDay = 10
    let past = new Date(pastYear, pastMonth, pastDay)
    it('Should log "Hooray!!! It is today!", when today is passed', function(done) {
        spyOn(console, 'log');
        BirthDayClass.howLongToMyBirthday(today).then(function() {
          expect(console.log).toHaveBeenCalledWith('Hooray!!! It is today!');
          done();
        });
    });
    it('Should log "Soon...Please, wait just xxx day/days", when birthday is in next 6 months', function(done) {
        spyOn(console, 'log');
        BirthDayClass.howLongToMyBirthday(tomorrow).then(function() {
          expect(console.log).toHaveBeenCalledWith('Soon...Please, wait just 1 day/days');
          done();
        });
    });
    it('Should log "Oh, you have celebrated it xxx day/s ago, don`t you remember?", when birthday was in last 6 months',
      function(done) {
        spyOn(console, 'log');
        BirthDayClass.howLongToMyBirthday(yesterday).then(function() {
          expect(console.log).toHaveBeenCalledWith(`Oh, you have celebrated it 1 day/s ago, don't you remember?`);
          done();
        });
    });
    it('should throw error "Wrong argument!" when given birthday is undefined', async () => {
        await expectAsync(BirthDayClass.howLongToMyBirthday())
          .toBeRejectedWith(new Error('Wrong argument!'));
    });
    it('should throw error "Wrong argument!" when given argument is not date or timestamp', async () => {
        await expectAsync(BirthDayClass.howLongToMyBirthday([]))
          .toBeRejectedWith(new Error('Wrong argument!'));
    });
    it('should throw error "Wrong argument!" when given birthday is more than 6 months away', async () => {
        await expectAsync(BirthDayClass.howLongToMyBirthday(future))
          .toBeRejectedWith(new Error('Wrong argument!'));
    });
    it('should throw error "Wrong argument!" when given birthday happened more than 6 months ago', async () => {
        await expectAsync(BirthDayClass.howLongToMyBirthday(past))
          .toBeRejectedWith(new Error('Wrong argument!'));
    });
});

