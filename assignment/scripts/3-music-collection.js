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

addToCollection("Black Sails in the Sunset", "AFI", "1999");

console.log(collection);
