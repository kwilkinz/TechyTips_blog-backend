// creating the express server 

const express = require("express");
const app = express(); 

console.log("lama")

app.listen("5000", () => {
    console.log("Backend is running!")
})