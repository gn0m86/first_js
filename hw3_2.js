const inputYear = prompt("Введіть рік");

if (isNaN(inputYear)) { 
    console.log("Будь ласка, введіть дійсний рік")
 } 
    else {
        if ((inputYear % 4 === 0 && inputYear % 100 !== 0) || inputYear % 400 === 0) 
            { 
                console.log(inputYear, "рік високосний") 
            } 
        else { 
            console.log(inputYear, "рік не високосний") 
        } 
    }
