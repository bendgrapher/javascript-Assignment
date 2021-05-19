function convertFahrToCelsius(fahr) {
     // extract datatype from  from the parameter
     const paramDataType = typeof(fahr) 
     // validate the parameter
     if(paramDataType !== "number"){
        return `${JSON.stringify(fahr)} is not a valid number but a/an ${paramDataType}`
     };
     // if validation passes, calculate the celsius
     const celsius =  (fahr - 32) * 5/9;
     return `${(celsius).toFixed(4)}°C`;  
};

console.log(convertFahrToCelsius(10))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({temp: 0}) )

Question 2 
// check if array includes 2, 3, 5 - replace with corresponding value
// check if value in array is divisble by 2, 3, 5
// check if param value is a number or can be converted to number

// for loop
function checkYuGiOh(n) {
     if (typeof n !== "number") {
       return `invalid parameter: ${n}`
     };
     const arr = [];  // [1, 2, 3, 4 ]
     const result = [];
     for (let i = 1; i <= n; i++) {
       if ( i <= 5 && (i % 2 ) ===0  ){
      arr.push("yu");
       }
       else if( i <= 5 && i % 3  == 0){
           arr.push("gi");
       }
       else if( i <= 5 && i % 5  == 0){
           arr.push("oh");
       }
       else{
           arr.push(i)
       }
     }
   return arr
    }

/

