var personName = "uSSaId imTIaz";
const lower = personName.toLowerCase();
const upper = personName.toUpperCase();
const titleCase = `${upper.slice(0,1) + lower.slice(1,6) + " " + upper.slice(7,8) + lower.slice(8)}`;


console.log(lower);
console.log(upper);
console.log(titleCase);

