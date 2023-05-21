console.log("Asending order\n")
function printAscendingPattern(n){
    let pattern ="";
    for(let i=0; i<n; i++){
        pattern = pattern + "*";
        console.log(pattern);
    }
}
printAscendingPattern(5);
console.log("\nDescending order\n")
function printDescendingPatter(n) {
    for (let i=n; i>0; i--){
        let pattern='';
        for (let j=0; j<i; j++){
            pattern +='*';
        }
        console.log(pattern);
    }
}
printDescendingPatter(5);