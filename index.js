/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 // Your code here
function createEmployeeRecord(employeeInfo) {
    return {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
  }
  
  function createEmployeeRecords(employeeInfos) {
      return employeeInfos.map(employeeInfo => createEmployeeRecord(employeeInfo))
  }
  // createTimeInEvent(bpRecord, "2014-02-28 1400")
  function createTimeInEvent(dateString) {
    const dateTimeArr = dateString.split(" ")
    const date = dateTimeArr[0]
    const hour = parseInt(dateTimeArr[1])
  
    this.timeInEvents.push({date: date, hour: hour,
  type: "TimeIn"})
    return this
  }
  
  function createTimeOutEvent(dateString) {
      const dateTimeArr = dateString.split(" ")
      const date = dateTimeArr[0]
      const hour = parseInt(dateTimeArr[1])
    
      this.timeOutEvents.push({date: date, hour: hour,
    type: "TimeOut"})
      return this
    }
  
    function hoursWorkedOnDate(date) {
  
      const timeInEvent = this.timeInEvents.find(e => date === e.date && e.type === "TimeIn")
      const timeOutEvent = this.timeOutEvents.find(e => date === e.date && e.type === "TimeOut")
      //console.log("time in", timeOutEvent.hour)
      //console.log("timeout", timeInEvent.hour)
      return (timeOutEvent.hour - timeInEvent.hour) / 100
      
  
    }
  
    function wagesEarnedOnDate(date) {
        return hoursWorkedOnDate.call(this, date) * this.payPerHour
    }
  
  
    function calculatePayroll(employeeRecords) {
        
       return employeeRecords.reduce((acc, r) => acc + allWagesFor.call(r), 0 )
    }
  
    function findEmployeeByFirstName(employees, name) {
        return employees.find(e => e.firstName === name) 
    }

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}