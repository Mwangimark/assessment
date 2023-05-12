
let a = prompt("enter an angle")
function angle(a){
    let b;
    if (a>0 && a<90){
        b = "Acute angle" 
    }
    else if (a == 90){
        b = "Right angle"
    }
    else if (a>90 && a<180){
        b = "Obtuse angle"
    }
    else if (a == 180){
        b = "Straight angle"
    }

    return b
}

console.log(angle(Number(a)))