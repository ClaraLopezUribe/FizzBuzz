/***** CONTROLLER function *****/

function getValues() {

    // Get the user input values for Fizz and Buzz
    // NOTE: The value obtained from an input element is always a string, even if the input type is "number" as it is in ths case...
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

   
    
    //...therefore, check for numbers by parsing (a technique used to analyze and interpret the syntax of a text or program to extract relevant information) the user input value. This method converts and returns an integer
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // Validate that the values in the variables fizzValue and buzzValue are both integers (not decimals, strings or other Non-number values)
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        // Call the LOGIC function, and assign it to a new variable
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //Call DISPLAY function
        displayData(fbArray);
        // OR display an error message
    } else {

        alert("Error: You must enter integers between 1 and 100");

    }
}

/***** LOGIC function *****/

function fizzBuzz(fizzValue, buzzValue) {
    
    // Initialize the array that will hold the value of the iterator after each loop
    let returnArray = [];
    
    // Test each number to determine if it meets the conditions for "FizzBuzz", "Fizz", or "Buzz", and add the values to the array
    for (let i = 1; i <=100; i++) {

        if (i % fizzValue == 0 && i % buzzValue == 0) {

            returnArray.push("FizzBuzz")


        } else if (i % fizzValue == 0) {

            returnArray.push("Fizz")


        } else if (i % buzzValue == 0) {

            returnArray.push("Buzz")

        } else {

            returnArray.push(i);      

        }   

    }

    return returnArray;

}

/***** DISPLAY function *****/

// Create a table to display the results of the fizzBuzz function
function displayData(fbArray) {

   // Get the table body element from the page
   let tableBody = document.getElementById("results");

   // Get the template element from the page
   let templateRow = document.getElementById("fbTemplate");

   // Clear the table first
   tableBody.innerHTML = "";

   for (let index = 0; index < fbArray.length; index += 5) {

    // Make a copy/fragment of the template row with importNode
    let tableRow = document.importNode(templateRow.content, true);

    // Get just the td and put them into an array to check its length
    let rowCols = tableRow.querySelectorAll("td");

    rowCols[0].classList.add(fbArray[index]);
    rowCols[0].textContent = fbArray[index];
    rowCols[1].classList.add(fbArray[index+1]);
    rowCols[1].textContent = fbArray[index+1];
    rowCols[2].classList.add(fbArray[index+2]);
    rowCols[2].textContent = fbArray[index+2];
    rowCols[3].classList.add(fbArray[index+3]);
    rowCols[3].textContent = fbArray[index+3];
    rowCols[4].classList.add(fbArray[index+4]);
    rowCols[4].textContent = fbArray[index+4];

    tableBody.appendChild(tableRow);

   }

}


    
   
    
/* TEMPLATE TAGS: VIDEO 35:14 */
          
        
           

/*
//Traditional Solve Fizz Buzz with a for loop
function FizzBuzz(value1, value2) {
    //DO:
    //Use "let" to declare an array variable "returnArray"
    //Set it equal to []

    //DO:
    //Use "for-loop" to count form 1 to 100 using
    //"i" as the loop control variable
    {
        //DO:
        //Use an "if-else-statement" to evaluate the parameters
        //DO:
        //Use an "if-else-statement" to test each number against the zero modulus(%)
        //of the parameters "value1" (fizz) and "value2" (buzz) . (ie. i % value1 == 0)
        //First test whether the case is true for both "value1" AND (&&) "value2"
        {
            //DO:
            //If the AND case is true then "push" the value 'FizzBuzz'
            //onto the "returnArray"
            
        } 
        //DO:
        //Else test if only the zero modulus(%)
        //of the "value1" is true
        {
            //DO:
            //If true then "push" the value 'Fizz' onto the "returnArray"
            
        } 
        //DO:
        //Else test if only the zero modulus(%)
        //of the "value2" is true
        {
            //DO:
            //If true then "push" the value 'Buzz' onto the "returnArray"
            
        } 
        else
        {
            //DO:
            //Else just push the number "i" onto the "returnArray"
            
        } 
    }
    
    //DO:
    //Finally return the variable "returnArray"
    
}

//custom display function
function displayData(fbData) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbData.length; i += 5) {
        const tableRow = document.importNode(templateRow.content, true);
        //grab only the columns in the template
        rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];
       
        rowCols[1].classList.add(fbData[i+ 1]);
        rowCols[1].textContent = fbData[i + 1];
       
        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i + 2];
       
        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i + 3];
       
        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i + 4];

        tableBody.appendChild(tableRow);
    }
} */