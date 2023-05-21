import {writeFileSync, readFileSync } from "node:fs";

function Read() {
  console.log("Hello World");

  let filePath = "D:/cdac_tvm/5. Web programming technology/Day_9/src/demo.txt";
  let fileData = readFileSync(filePath, { encoding: "utf-8" });

  console.log(fileData);
}

function Write(){
  let filePath = "D:/cdac_tvm/5. Web programming technology/Day_9/src/demo.txt";
  writeFileSync(filePath, "I'm from CDAC TVM")
}


Write();
Read();
