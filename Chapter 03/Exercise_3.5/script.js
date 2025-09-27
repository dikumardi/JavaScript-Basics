         //========================= 
         //    Objects in objects
         //=========================

 let company = { companyName: "Healthy Candy",
 activity: "food manufacturing",
 address: {
 street: "2nd street",
 number: "123",
 zipcode: "33116",
 city: "Miami",
 state: "Florida"
                },
 yearOfEstablishment: 2021 
              };
              console.log(company);

       // To access or modify one of the properties of the address here, we can use two approaches

              // changing value 
              //1st way to do
      company.address.zipcode = "117201"

            //2nd way to do
      company["address"]["number"] = "100"

      console.log(company);

        //========================= 
        //    Arrays in objects
        //=========================
          company = { 
                companyName: "Health Candy",
                activities: 
                [
                "food manufacturing", 
               "improving kids' health", "manufacturing toys"
                 ],
                address: {
                street: "2nd street",
                number: "123",
                zipcode: "33116",
                city: "Miami",
                state: "Florida"
                 },
                yearOfEstablishment: 2021 
                 };

        let activity = company.activities[1];
        console.log(activity); // improving kids'
                  

        //========================= 
        //    Objects in arrays
        //=========================

    let addresses = [{
             street: "2nd street",
             number: "123",
             zipcode: "33116",
             city: "Miami",
             state: "Florida"
           },
           {
             street: "1st West avenue",
             number: "5",
             zipcode: "75001",
             city: "Addison",
             state: "Texas"
           }];

           let streetName = addresses[0].street;
           console.log(streetName); //2nd street


       //========================= 
        //    Objects in  arrays in objects
        //=========================
    
     company = { companyName: "Healthy Candy",
                    activities:
                    [ "food manufacturing", 
                    "improving kids' health",  "manufacturing toys"
                    ],
                    address: [{
                      street: "2nd street",
                      number: "123",
                      zipcode: "33116",
                      city: "Miami",
                      state: "Florida"
                    },
                    {
                      street: "1st West avenue",
                      number: "5",
                      zipcode: "75001",
                      city: "Addison",
                      state: "Texas"
                    }],
                    yearOfEstablishment: 2021 
                  };

      let sName = company.address[0].street // 2nd street  
      console.log(sName);
      
       //=====================================
       /**  Practice exercise 3.5
        1. Create an object named people that contains an empty array that is called friends.
        2. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
        3. Add the three friends to the friend array.
        4. Output it to the console. **/
       //=====================================

       let people = {
        person1: "p1",
        friends: [],
       }

       let val1 = {
        firstNames : "hwfw",
        lastNames  : "wwwwwwf",
        id: 1
       };
       let val2 = {
         firstNames : "esrty",
        lastNames  : "yoy",
        id: 2
       };   
       let val3 = {
         firstNames : "quer",
        lastNames  : "mbtds",
        id: 3
       };


     
      people.friends.push(val1,val2,val3)
     console.log(people);
     
     
