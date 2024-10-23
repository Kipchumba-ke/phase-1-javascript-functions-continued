// code your solution here
//Function declaration
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activit = 'go to the office'){
    return `This Monday, I will ${activit}.`
}

function wrapAdjective(wraps = `*`){
    return function (msg = `special` ) {
        return `You are ${wraps}${msg}${wraps}!`
    }
}