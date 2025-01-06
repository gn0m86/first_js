const N = +prompt("Введіть число:");

for (let num = 1; num <= N; num++) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum = sum + i;
        }
    }
    if (sum === num) {
        console.log(`Число ${num} є досконалим.`);
    }
}

