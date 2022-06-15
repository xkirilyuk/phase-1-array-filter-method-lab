const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


const findMatching = function(drivers, driverNamePassing) {
    return drivers.filter(function(driver) {
      return driver.toLowerCase() === driverNamePassing.toLowerCase()
    })
}


const fuzzyMatch = (drivers, inputLetters) => {
    return drivers.filter(driver => driver.startsWith(inputLetters))
}
   
const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  const matchName = (drivers2, inputDriverName) => {
    return drivers2.filter(driver => driver.name === inputDriverName)
  }
