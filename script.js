let amount = 1000;
console.log(`The bill acount is RS ${amount}`);

console.log(`have fun`);

let heading = document.getElementById("heading"); 
heading.innerHTML = `The bill amount is RS ${amount} <br> Have Fun`;

function convertToInches(){
   const lengthInCM = Number(document.getElementById("lengthInCM").value);
   const lengthInInches = document.getElementById("result");
   lengthInInches.innerHTML = "Inches  "+(lengthInCM/2.54).toFixed(2);

}

function outer(){
    let outerVariable = "bread";
    function inner(){
        let innerVariable = "butter";
        console.log("Outer Variable: ",outerVariable )
        console.log("Inner Variable: ",innerVariable )
    }

    return inner;

}

let retVal = outer();
retVal();

//Ensure that you return the array index of two number whoes sum is 13

let nums = [2,7, 11, 15];

let sumOfTwoNumbers = (myArray, target)=>{
 let myMap = new Map();
 for (let i=0; i< myArray.length; i++){
    let pair = target -myArray[i];
    if(myMap.has(pair)){
        return [myMap.get(pair),i];
    }else{
        myMap.set(myArray[i],i);
    }  


 }

};
console.log(sumOfTwoNumbers(nums, 13));
let n = '0000000000000000000000000000011';
console.log(n.length);
let count1sInbytes = () =>{
    let count = 0;
    
    for(let j=1; j<=32;j++){
        let val = (n&1);
        console.log("val ",val);
        count +=val;
        n = n>>1;

    }
    return count;

};
console.log(count1sInbytes())
