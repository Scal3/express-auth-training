const pow = (number, value) => value === 1 ? number : number *= pow(number, value - 1)

console.log(pow(10,100))