// // setInterval(), setTimeout(), clearTimeout()- Q18

// let d = new Date();
// let time = d.toLocaleTimeString();
// console.log(time);
const intervalID = setInterval(() => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}, 1000)