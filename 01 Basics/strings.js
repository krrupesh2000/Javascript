const name = "Rupesh"
const greeting = "Hello"

console.log(greeting+" "+ name) 

console.log(`${greeting} ${name}`);   //modern way using template literals




const ytChannel = new String("IndiGlitch")              //String Object
console.log(ytChannel[0])  //I 
console.log(ytChannel.__proto__);


console.log(ytChannel.length)  //10;
console.log(ytChannel.toUpperCase())  //INDIGLITCH
console.log(ytChannel.charAt(2));
console.log(ytChannel.indexOf('G'))  //4
console.log(ytChannel.endsWith("tch"))  //true
console.log(ytChannel.includes("Glitch"))  //true
console.log(ytChannel.substring(2,6))  //diGl
console.log(ytChannel.slice(2,6))  //diGl
console.log(ytChannel.slice(-4))  //itch
console.log(ytChannel.replace("Indi","Tech"))  //TechGlitch
console.log(ytChannel.split(""))  //['I', 'n', 'd', 'i', 'G', 'l', 'i', 't', 'c', 'h'];
console.log(ytChannel.split("i"))  //['Ind','Gl','tch']
console.log(ytChannel.repeat(3))  //IndiGlitchIndiGlitchIndiGlitch

const message = "  Hello World  "
console.log(message.trim())  //"Hello World"
console.log(message.trimStart())  //"Hello World  "
console.log(message.trimEnd())  //"  Hello World"



const url = "https://www.indiaglitch.com/rupesh%20kumar"
console.log(url.replace("%20","-"))  //"https://www.indiaglitch.com/rupesh-kumar"
console.log(url.includes("gupta"))  //false;
