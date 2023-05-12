
let a = prompt("Enter first number")
let b = prompt("Enter Second number")

function checkNo(num1,num2){
  let sum = (num1+num2)
    
    if ((num1==8 || num2 ==8)){
        return "true"
    }
    else if (sum == 8){
        return "true"
    }
    else if ((Math.abs(num1-num2) == 8)){
        return "true"
    }
  }

  console.log(checkNo(Number(a,b)))