const module1 = require('./module1');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const readline = require('readline');

const rl = readline.createInterface({input: process.stdin,
                                    output: process.stdout})

var numOne = Math.floor((Math.random()*10)+1)
var numTwo = Math.floor((Math.random()*10)+1)
var answer = numOne + numTwo;

rl.question(`what is ${numOne} + ${numTwo}? /n`, function(userInput) {
    if(userInput.trim() == answer){
        rl.close();
    }else{
        rl.setPrompt('Incorrect Response Please Try Again\n');
        rl.prompt();
        rl.on('line',function(userInput) {
            if(userInput.trim() == answer) {
                rl.close();
            } else {
                rl.setPrompt(`You answer of ${userInput} is incorrect`);
                rl.prompt();
            }
        })
    }

})

rl.on('close', function() {
    console.log('Correct!!!');
});

//console.log(module1);
//console.log("Hello World");
//console.log(module1.sum(1,8));
//console.log(new module1.humanBeing());

eventEmitter.on('helloSailor', function(num1, num2) {
    console.log(helloSailor());
    console.log(num1 + num2);
})

eventEmitter.emit('helloSailor', 5, 7);

function helloSailor () {
    return "Land ahoy";
}

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

var barry = new Person('Barry');

barry.on('name', function() {
    console.log(`my name is ${barry.name}`); 
});

barry.emit('name');