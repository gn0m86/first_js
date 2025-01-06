const height = Number(prompt("Введіть висоту ялинки:"));

for (let i = 0; i < height; i++) {
    let spaces = " ".repeat(height - i - 1);
    let stars = "*".repeat(i * 2 + 1);
    console.log(spaces + stars);
};