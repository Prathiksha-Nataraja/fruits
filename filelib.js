const fs = require('fs');

/*fs.readFile('hello.txt',(err,data) => {
    if(err === null){
    console.log(data.toString());
    }else{
        console.log(err.message);
    }
})*/

let d = fs.readFileSync('hello.txt');

fs.writeFile('hello.txt',  d + ' How are you', (err) => {
    if(err === null){
        console.log('Sucessfully write data');
    }else{
        console.log(err.message);
    }
});