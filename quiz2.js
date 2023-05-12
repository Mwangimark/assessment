
let a = prompt("Enter number to be converted to hrs and mins")

function convertToHours(num){
    let hours = Math.floor(num/60)
    let minutes = (num%60)

    if (num<60){
        return (num+"  mins")
    }
    else{
        return ( hours+" Hrs    "+ minutes)
    }
    
}

console.log(convertToHours(Number(a)))