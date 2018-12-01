// console.log("util.js is running");
// export const square = a => a * a;
// export const add = (a, b) => a + b;
// //export { square, add };
// //

const isAdult = age => age > 18;
const canDrink = age => age > 21;
export default age => age >= 65;

// const subtract = (a, b) => a - b;
// export default subtract;

//export default (a, b) => a - b;

export { canDrink };
export { isAdult };
