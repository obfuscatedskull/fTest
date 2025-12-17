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

let nums = [2,7,11,15];
let target = 9;
let storedNumbers = [];
for (let i = 0; i < nums.length; i++){
    if (storedNumbers.includes(i)){
        continue
    }
    for (let j = i+1; j < nums.length; j++){
        if (storedNumbers.includes(j)){
            continue;


        }
        if (nums[i] + nums[j] === target){
            storedNumbers.push(i);
            storedNumbers.push(j);
        }
    }
    
}



