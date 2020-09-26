setTimeout(() => {
    console.log(1);
}, 0)

new Promise((resolve,reject) => {
    console.log(2);
})