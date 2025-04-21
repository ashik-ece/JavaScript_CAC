/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green Tea", "black Tea", "oolong Tea"];
let firstTea = teaFlavors[0];
console.log(firstTea);


/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
let cities = ["London", 'tokyo', 'Paris', 'NewYork'];
let favoriteCity = cities[2];
console.log(favoriteCity);

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal Tea", "White Tea", "masala chai"];
teaTypes[1] = "jasmine Tea";
console.log(teaTypes[1]);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = new Array("mumbai", "Sydney");
citiesVisited.push("Berlin");
console.log(citiesVisited);
/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["Chai", "iced Tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();
console.log(lastOrder);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`. // softcopy => Call by reference (only in arrays and objects)
   // in arrays(objects), if we create an array and make a copy of that array, then if we change the original array, the changes will 
   reflect in copied array as well. This is called as softcopy. (as the changes happens in memory and the copied array also points to the
   same memory location).


   because since its just a softcopy, the copy doesnt create a new memory location, it just refers to the old/parent element
*/

let popularTeas = ["green Tea", 'oolong tea', 'chai'];
let softCopyTeas = popularTeas;




/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.

   // In hardcopy, the copied/daughter array, makes a new memory location and copies there, hence, if we change the value in the copied array
   it wont refelct in the original array (because there is two memory location and change is happeneing to only one of them (copied array)).

   There are many ways to create a hardcopy:
   
   1) let hardcopy = [...topcities] // we create an array and put ... then the copying/parent array name. This will create a hardcopy [... -> spread operator]
   2) let hardcopyCities = topcities.slice(); // using a method called slice does the exact same (although slice having other use cases).
*/

let topCities = ['berlin', 'singapore', 'NewYork'];
let hardCopyCities = [...topCities];

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["paris", "rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities + asianCities; // or worldcities = europeanCities.concat(asianCities); 
// because, + makes it a string, not a array
// worldcities = [europeancities, asiancities] -> this will create array inside an array [output: [[paris, rome], [tokyo, bangkok]]]
console.log(worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["masala chai", " oolang tea", "green Tea", "earl grey"];
let menuLength = teaMenu.length;
console.log(menuLength);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
