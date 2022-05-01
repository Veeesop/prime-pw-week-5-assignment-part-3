console.log("***** Music Collection *****");
let collection = [];

addToCollection = function (title, artist, yearPublished, tracks) {
  const newEntry = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks,
  };
  collection.push(newEntry);
  return newEntry;
};

console.log(
  addToCollection("Black Sails in the Sunset", "AFI", 1999, [
    { trackName: "Strength Through Wounding", trackDuration: "1:33" },
    { trackName: "Porphyria Cutanea Tarda", trackDuration: "2:07" },
    { trackName: "Exsanguination", trackDuration: "2:48" },
  ])
);
console.log(
  addToCollection("Jettison Mind Hatch", "Tipper", 2019, [
    { trackName: "Sayonara", trackDuration: "4:27" },
    { trackName: "Vection", trackDuration: "4:07" },
    { trackName: "Exit Chapel Perilous", trackDuration: "3:08" },
  ])
);
console.log(
  addToCollection("My Tennessee Mountain Home", "Dolly Parton", 1973, [
    { trackName: "The Letter", trackDuration: "2:03" },
    { trackName: "I Remember", trackDuration: "342" },
    { trackName: "Old Black Kettle", trackDuration: "2:32" },
  ])
);
console.log(
  addToCollection("9 to 5 and Odd Jobs", "Dolly Parton", 1980, [
    { trackName: "9 to 5", trackDuration: "2:45" },
    { trackName: "Hush-a-bye Hard Times", trackDuration: "3:48" },
    { trackName: "The House of the Rising Sun", trackDuration: "4:02" },
  ])
);
console.log(
  addToCollection("Stay Trippy", "Juicy J", 2013, [
    { trackName: "Stop It", trackDuration: "3:21" },
    { trackName: "Smokin Rollin", trackDuration: "2:36" },
    { trackName: "No Heart No Love", trackDuration: "4:03" },
  ])
);
console.log(
  addToCollection("Reign in Blood", "Slayer", 1986, [
    { trackName: "Angel of Death", trackDuration: "4:52" },
    { trackName: "Piece by Piece", trackDuration: "2:03" },
    { trackName: "Necrophobic", trackDuration: "1:41" },
  ])
);

console.log(collection);

showCollection = function (arr) {
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `${arr[i].title} by ${arr[i].artist}, published in ${arr[i].yearPublished}. `
    );
    for (let j = 0; j < arr[i].tracks.length; j++) {
      console.log(
        `${j + 1}. ${arr[i].tracks[j].trackName}: ${
          arr[i].tracks[j].trackDuration
        }`
      );
    }
  }
};

showCollection(collection);

const findByArtist = (artist) => {
  let foundArtist = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      foundArtist.push(collection[i]);
    }
  }
  return foundArtist;
};

console.log(findByArtist("Dolly Parton"));
console.log(findByArtist("Toby Keith"));

function search(artist, year, trackName) {
  let trackSearchResult = [];
  let artistYearSearch = [];
  let searchResult = [];
  if (artist === undefined || year === undefined || trackName === undefined) {
    return (searchResult = collection);
  }
  collection.filter(function (n) {
    return (artistYearSearch = n.artist === artist && n.yearPublished === year);
  });
  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < collection[i].tracks.length; j++) {
      if (collection[i].tracks[j].trackName === trackName) {
        return (trackSearchResult = collection[i]);
      }
    }
  }
  if (trackSearchResult === artistYearSearch) {
    searchResult = artistYearSearch;
  }
  return searchResult;
}

console.log(search("Dolly Parton", 1980, "9 to 5"));
console.log(search("Dolly Parton", 1980, "9 to 5"));
console.log(search("Toby Keith", 2020, "I love this bar"));
console.log(search());
