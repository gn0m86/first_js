const N = +prompt("Введіть число:"); 
let isSimpleNumber = true;
if (N < 2) 
{ 
    isSimpleNumber = false;
} else { 
    for (i = 2; i < N; i++) 
    { 
        if (N % i === 0) 
        { 
            isSimpleNumber = false; 
            break;
        }
    }
}
if (isSimpleNumber) { 
    console.log("Просте число.");
} else { 
    console.log("Складене число"); 
}