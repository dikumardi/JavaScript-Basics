                         //====================================================
                        /**Manipulating an array Take the following array: **/
                         //====================================================


      const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];

// Manipulate your array using various methods, such as pop(), push(), shift(), and unshift(), and transform it into the following

/**
  Remove the first item and the last item.
 • Add FIRST to the start of the array.
 • Assign hello World to the fourth item value.
 • Assign MIDDLE to the third index value.
 • Add LAST to the last position in the array.
 • Output it to the console
  **/
//  console.log(theList);

theList.shift();
theList.pop();

// theList.splice(3,1,"hello world")
theList[3]= "hello world"

theList.unshift("FIRST");

// theList.splice(2,1,"MIDDLE");
theList[2] ="MIDDLE"

theList.push("LAST");

console.log(theList);


