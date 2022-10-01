var names = ["Faiza", "wajeeha", "umair", "abdullah"];
//for loop
for(var i=0; i<names.length; i++){
 console.log("Hello "+names[i]);
}

var myFav_Transport = ["Car","Aeroplane","Motorcycle"]
for(var i=0; i<myFav_Transport.length; i++){
    console.log("I would Like to Own a "+myFav_Transport[i]);
   }


   console.log("Guest List")
var mydinner_guests = ["Vanessa","Maheen","Ayesha"]
for(var i=0; i<mydinner_guests.length; i++){
    console.log(mydinner_guests[i]);
   }
// Ayesha not Coming in Dinner

console.log("Ayesha not Coming in Dinner")
mydinner_guests.pop()
for(var i=0; i<mydinner_guests.length; i++){
    console.log(mydinner_guests[i]);
   }
// I Decide to Invite Alishba
console.log("I Decide to Invite Alishba")
mydinner_guests.push("Alishba")
for(var i=0; i<mydinner_guests.length; i++){
    console.log(mydinner_guests[i]);
   }
console.log("I found a Big table for Dinner I Decided to Invite Zunaira")
// I found a Big table for Dinner
// I Decided to Invite Zunaira
mydinner_guests.unshift("Zunaira")
for(var i=0; i<mydinner_guests.length; i++){
    console.log(mydinner_guests[i]);
   }
// John also Joining my DInner
console.log("John also Joining my DInner")
mydinner_guests.splice(2, 0, "John");

console.log("oh No I Can only Invite Two People for Dinner")
for(var i=0; i<mydinner_guests.length; i++){
    console.log(mydinner_guests[i]);
   }

   console.log("oh No I Can only Invite Two People for Dinner")
   var popped = mydinner_guests.splice(1,3);
for(var i=0; i<mydinner_guests.length; i++){
    console.log(mydinner_guests[i]+" Are Still My Guest");
   }

// Dinner Over
console.log("Dinner Over")
mydinner_guests.splice(0, mydinner_guests.length);
console.log(mydinner_guests)