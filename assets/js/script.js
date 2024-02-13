

   

// POP
// POP fjerner det sidste element fra et array og returnerer det element. bagefter viser resten elementer
// i denne eksample Pop fkerner tomato
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Here viser sæste element som er tomato"

console.log(plants);
// og her viser resten af elementer





//Push
//Let dige at vi har 3 producter og vil gerne tilføj ren sko til listen
// Så vi bruge PUSH for at tilføj sko til listen.
const products = ['pants', 'hat', 'hoodie']; // her er vores 3 produkter

const count = products.push('shoe'); // her vi tilføj sko til og teler alt producter
console.log(count);  // Vi ser tallet

console.log(products); // Og Vi ser alle producter





//Shift
//Man kan bruge SHIFT for at fjerne første element i Array
const array1 = [1, 2, 3]; // Her vi har 3 elementer

const firstElement = array1.shift(); // skriver shift funktion efter vores varible

console.log(array1); // og vi ser resulter


console.log(firstElement); // og kan også se elementet, der er blevet slettet 





//Unshift
//let sige at vi hat 3 tal og vil gerne tilføj 2 tal i foran dem, 
//Så vi brug Unshift for at gør det
const newArray = [1, 2, 3]; // her er vores 3 tal

let test = newArray.unshift(4, 5); // vi tilføj 2 tal
console.log(test);  // Vi se hvor mange er i alt

console.log(newArray); // her vi kan se vores array




//Slice
// Fjerne elementer og laver en kopi af resten
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // her fjerne 2 elemenet fra første af listen


console.log(animals.slice(2, 4)); // Her 2 fjener 2 elemener fra første og elemenet nummer 4 i array som er elephant




// Med ForEach vi kan give funktion én gang for hvert array-element.
const myArray = ['red', 'blue', 'green'];

myArray.forEach((element) => console.log(element));





