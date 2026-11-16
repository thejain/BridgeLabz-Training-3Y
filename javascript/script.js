//console.log("Hello World!")
//v8 engine chrome
//data type - permitive - 8
//let var const


// var and function hosting support karte hai
// console.log(a);
// var a = "Hello";


// scope =>
// 1 global
// 2 block
// 3 functional scope => var is a functional scope

// let a = "hello";
// {
//     console.log(a);
// }
// console.log(a);
//  Output = 2 times hello


// {
//     let a = "hello";
//     console.log(a);
// }
//     console.log(a);


// function fun(){
//     var a = "hello";
//     console.log(a);
// }
// console.log(a);   // Output = error


// == vs ===
// null vs undefined
// string concatenation
// string interpolation

// let name = "Satya"
// let msg = `hello my name is ${name}`
// console.log(msg);



// method vs function
// let username = "   abc xyz  ";
// console.log(username.trim());
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.includes("xyz"));
// console.log(username.replace("abc", "a"));
// console.log(username.trim().split());


let password = "wertyui#$WQ23";
function checkPassword(password) {
    if (password.length >=6 && password.length <=20 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/) && password.match(/[^A-Za-z0-9]/)) {
        return "Password is valid.";
    } else {
        return "Password must be between 6 and 20 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }
}
console.log(checkPassword(password))


function fogetPassword() {
    
    let otp=Math.floor(1000 + Math.random() * 9000);
    return otp;
}
console.log(fogetPassword());