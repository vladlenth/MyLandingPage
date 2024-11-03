// let i = 0; start
// i < n; condition >= = <= < >
// i++ i-- i+= i-=; increment
evenN = "even";
odd = "odd";
for (let i = 0; i <= 2; i++) {
    console.log(i);
}


console.log("-----------");


for (let i = 1; i <= 3; i++) {
    console.log("Ya takoi cifer: ", i);
}


console.log("----------- !-ne");


for (let i = 1; i <= 7; i+=2) {
    console.log("Tiper' ya "+ `${odd}`+ "(!4etniy) cifer: ", i);
}


console.log("-----------");


for (let i = 2; i <= 7; i+=2) {
    console.log("Tiper' ya "+ `${evenN}`+ "(4etniy) cifer: ", i);
}


console.log("-----------");


for (let i = 5; i > 0; i--) {
    console.log("Obratniy cifer", i);    
}
console.log("zalupa");


console.log("-----------");


for(let i = 1; i <= 15; i++) {
    if(i === 10) {
        console.log(i, "cm huy");
        break;
    } else {
        console.log(i);
    }
}
