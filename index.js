// code your solution here
function saturdayFun(activity = "roller-skate"){
    if (activity === "roller-skate"){
        return "This Saturday, I want to roller-skate!"
    }else{
        return "This Saturday, I want to " + activity + "!";
    }
}

function mondayWork(activity2 = "go to the office"){
    if (activity2 === "go to the office"){
        return "This Monday, I will go to the office.";
    }else{
        return "This Monday, I will " + activity2 + ".";
    }
}

function wrapAdjective(adjective = "*"){
    return function(string){
      return `You are ${adjective}${string}${adjective}!`;
    }
  }