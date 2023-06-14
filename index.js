// Code your solution in this file!

let firstTwo=["Mary", "James", "Tony"]

const returnFirstTwoDrivers= (array)=>{
  return array.slice(0,2)
};

console.log(returnFirstTwoDrivers(firstTwo))





const returnLastTwoDrivers =(array)=>{
    return array.slice(-2)
}

console.log(returnLastTwoDrivers(firstTwo))






let selectingDrivers=[ returnFirstTwoDrivers, returnLastTwoDrivers]



const createFareMultiplier=()=>{
    return (function (interger){
        return interger ** 2
    })
}

console.log(createFareMultiplier()(5))





const fareDoubler =(fare)=>{
    return fare *2
}

console.log(fareDoubler(5))



const fareTripler= (fare) =>{
    return fare*3;
}

console.log(fareTripler(5))



function selectDifferentDrivers (arrayOfDrivers, callBack){
    return callBack(arrayOfDrivers);
}

console.log(selectDifferentDrivers(firstTwo, returnFirstTwoDrivers))
