const inputYears = prompt("Введіть Ваш вік");

if (isNaN(inputYears)) { 
    console.log("Будь ласка, введіть дійсний вік") } 
    else if ((inputYears % 100) >= 11 && (inputYears % 100) <= 14) {
    console.log( "років"); 
    } else if ((inputYears % 10) === 1) { 
    console.log( "рік");
    } else if ((inputYears % 10) >= 2 && (inputYears % 10) <= 4) { 
    console.log( "роки"); 
    } else { console.log( "років"); }
    
