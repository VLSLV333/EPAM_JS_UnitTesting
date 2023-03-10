class BirthdayService {
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async howLongToMyBirthday(birthDay){
      let delayForAsyncFunction = 100
        await this.delay(delayForAsyncFunction)
        if (birthDay === undefined || birthDay === null || typeof birthDay.getFullYear !== 'function'){
          throw new Error('Wrong argument!')
        }
        if (typeof birthDay === 'number'){
              let brd = new Date(birthDay)
              let brdYear = brd.getFullYear()
              let brdMonth = brd.getMonth()
              let brdDate = brd.getDate()
              birthDay = new Date(brdYear, brdMonth,brdDate)
        } else if (typeof birthDay.getFullYear === 'function') {
              let brdYear = birthDay.getFullYear()
              let brdMonth = birthDay.getMonth()
              let brdDate = birthDay.getDate()
              birthDay = new Date(brdYear, brdMonth,brdDate)
        }
        let todayYear = new Date().getFullYear()
        let todayMonth = new Date().getMonth()
        let todayDate = new Date().getDate()
        let today = new Date(todayYear, todayMonth,todayDate)
        let milS = 1000; let sec = 60; let min = 60; let hour = 24;
        let one_day=milS*sec*min*hour;
        let dateIn6Months
        let date6MonthsBefore
        let june = 6
        let december = 12
        if (todayMonth < june){
          let todayMonthPlus6Months = new Date().getMonth() + june
          dateIn6Months = new Date(todayYear, todayMonthPlus6Months,todayDate)
          let todayMonthMinus6Months = new Date().getMonth() - june + december
          let todayYearInPrev6Months = new Date().getFullYear() - 1
          date6MonthsBefore = new Date(todayYearInPrev6Months, todayMonthMinus6Months,todayDate)
        } else {
          let todayMonthPlus6Months = new Date().getMonth() + june - december
          let todayYearInnext6Months = new Date().getFullYear() + 1
          dateIn6Months = new Date(todayYearInnext6Months, todayMonthPlus6Months,todayDate)
          let todayMonthMinus6Months = new Date().getMonth() - june
          date6MonthsBefore = new Date(todayYear, todayMonthMinus6Months, todayDate)
        }
        if (birthDay.getTime() > dateIn6Months.getTime()){
          throw new Error('Wrong argument!')
        } else if (birthDay.getTime() < date6MonthsBefore.getTime()){
          throw new Error('Wrong argument!')
        }
        let promise = new Promise((resolve) => {
            if (birthDay.getTime() === today.getTime()){
                this.congratulateWithBirthday()
            } else if( birthDay.getTime() <= dateIn6Months.getTime() && birthDay.getTime() > today.getTime()){
              let secondstoBD = birthDay.getTime() - today.getTime()
              let daysleft = Math.round(secondstoBD/one_day)
              resolve(`Soon...Please, wait just ${daysleft} day/days`)
            } else if (birthDay.getTime() >= date6MonthsBefore.getTime() && birthDay.getTime() < today.getTime()){
              let secondsafterBD = today.getTime() - birthDay.getTime()
              let daysafterBD = Math.floor(secondsafterBD/one_day)
              resolve(`Oh, you have celebrated it ${daysafterBD} day/s ago, don't you remember?`)
            } 
        })
        promise
        .then( (message) => this.notifyWaitingTime(message))
    }
    congratulateWithBirthday(){
        console.log('Hooray!!! It is today!')
    }
    notifyWaitingTime(waitingTime){
      console.log(waitingTime)
    }
}
module.exports = BirthdayService;


