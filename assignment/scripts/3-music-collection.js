console.log("***** Music Collection *****");
let collection = [];

const addToCollection = (title, artist, yearPublished) => {
  const newEntry = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(newEntry);
  return newEntry;
};

console.log(addToCollection("Black Sails in the Sunset", "AFI", "1999"));
console.log(addToCollection("Jettison Mind Hatch", "Tipper", "2019"));
console.log(
  addToCollection("My Tennessee Mountain Home", "Dolly Parton", "1973")
);
console.log(addToCollection("9 to 5 and Odd Jobs", "Dolly Parton", "1980"));
console.log(addToCollection("Stay Trippy", "Juicy J", "2013"));
console.log(addToCollection("Reign in Blood", "Slayer", "1986"));

console.log(collection);

const showCollection = (arr) => {
  console.log(arr.length);
  for (item of arr) {
    console.log(
      `${item.title} by ${item.artist}, published in ${item.yearPublished}.`
    );
  }
};

showCollection(collection);
