/** 
 1. Create a new myCar object for a car. Add some properties, including, but not 
limited to, make and model, and values for a typical car or your car. Feel free 
to use booleans, strings, or numbers.

 2. Create a variable that can hold the string value color. This variable 
containing a string value color can now be used to reference the property 
name within myCar. Then, use the variable within the square bracket notation 
to assign a new value to the color property in myCar.

 3. Use that same variable and assign a new property string value to it, such as 
forSale. Use the bracket notation once again to assign a new value to the 
forSale property to indicate whether the car is available for purchase.

 4. Output make and model into the console.

 5. Output the value of forSale into the console.
 * **/

// const myCar = {
//       make: "Toyota",
//     model: "Camry",
//     price :  7000000,
//     year : 2000,
//      isElectric : false ,
//      fuel : "disesl",
// }

// let  property = "color"
// myCar[property] =  "newValue";

// property = "forSale"
// myCar[property] =  true;


// console.log(myCar.make + " " + myCar.model);
// console.log(myCar.forSale);


 let dog = { dogName: "JavaScript", 
weight: 2.4, 
color: "brown", 
breed: "chihuahua", 
age: 3, 
burglarBiter: true 
          };

          dog["color"] = "blue"
          dog.weight = 2.3;
          console.log(dog);

          dog["age"] = "three"
          console.log(dog);
                     
          let variable = "age";
          console.log(dog[variable]);

         variable = "breed";
          console.log(dog[variable]);
          dog[variable]= "dachshund";
          console.log(dog["breed"]);
          
          
          let myCar = {
            make:"toyota",
            model : "i20",
            price : 7000000,
            isElectric: false
          }

          let variable1 = "color";
          myCar[variable1] = "blue"

          variable1 = "forSale"
        
        myCar[variable1]  = true 

          console.log(myCar.make + " " +  myCar.model);
          console.log(myCar[variable1]);
          
          
          
