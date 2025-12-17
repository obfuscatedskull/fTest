let obj = {
    user0: "boopes",
    user1: "bodbas",
    user2: "bobos",
}

Object.keys(obj).forEach((key) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach((key) => {
    console.log(key);
})

const userValid = (object, user, pass) => {
    Object.keys(object).forEach((key) => {
        if (key === user){
            if (obj[key] === pass){
                console.log("yay");
            }
        }
    })
}

let meh = prompt("user");
let bleh = prompt("pass");
userValid(obj,meh,bleh);


let arr = ["bob", [["bobby"]], ["bobaroon"], "bab"];


console.log(arr.flat(50));



