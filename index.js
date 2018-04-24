// Code your solution in this file!

const returnFirstTwoDrivers = function (list) {
  return list.slice(0,2)
}

const returnLastTwoDrivers = function (list) {
  return list.slice(list.length - 2,list.length)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (list, fn) {
  return fn(list);
}
