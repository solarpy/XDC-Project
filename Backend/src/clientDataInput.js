function input () {
    const prompt = require('prompt-sync')();
  
    const emailAddress = prompt('Input your Email Address:');
  
    const policy = prompt("Input your Policy ID: ");
  
    const duration = prompt("Input your duration: ");
  
    const start = prompt("Input your start date of policy: "); 

    const end = prompt("Input your end date of policy: ");
  
    const phone = prompt("Input Phone Number: ");
  
    const name = prompt("Input Full Name: ");
  
    const price = prompt("Input Price of Policy: $");
  
    const age = prompt("Input your Age: ");

    const gender = prompt("Input your gender: ");

  
    return {"emailAddress":emailAddress, "policy":policy, "duration":duration, "start":start, "end":end
    , "phone":phone, "name":name, "price":price, "age":age, "gender":gender};
  
  }
  
  
  
  module.exports = {
    input 
  }