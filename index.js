console.log("hellow world")

for (let i = 0; i < 12; i++) {
    console.log(i);
}

const os = require("os")
console.log(os.totalmem()/1024 /1024 / 1024 ,"GB")
console.log(os.freemem()/1024 /1024 / 1024 ,"GB")

console.log(os.uptime()/60/ 60 ,"hours")

