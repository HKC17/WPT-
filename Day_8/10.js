// Arrow Function
let arrowFunction = (p) => {
    console.log("Arrow Function: " + p);
    };
    // Overloaded Arrow Function
    let overloadedArrowFunction = (p1, p2) => {
    console.log("Overloaded Arrow Function: " + p1 + ", " + p2);
    };
    // Arrow Function with Default Value
    let arrowFunctionWithDefault = (p = 0) => {
    console.log("Arrow Function with Default Value: " + p);
    };
    arrowFunction(10); 
    overloadedArrowFunction(20, 30); 
    arrowFunctionWithDefault(); 
    arrowFunctionWithDefault(100);