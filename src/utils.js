console.log('utils.js is running');

 const square = (x) => x * x;
// export const square = (x) => x * x;

 const add = (a, b) => a + b;
// export const add = (a, b) => a + b;

const substract = (a, b) => a - b;

export {
    square,
    add,
    substract as default
};

// export default (a, b) => a - b; // this also works
// export default substract; // this also works