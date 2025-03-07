// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun("swim"));
console.log(saturdayFun("dance"));



function mondayWork(activity = "go to the office") {
return `This Monday, I will ${activity}.`;
}
mondayWork();


function wrapAdjective(wrapper = "*") {
  return function(adjective = "special") {
      return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}
