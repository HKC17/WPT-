function processParams(a, b, c) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    }
    processParams(1, 2, 3); // Pass all parameters
    processParams(1); // Pass less parameters
    processParams(1, 2); // Define with default value
    processParams(1, 2, 3, 4); // Pass more parameters
    