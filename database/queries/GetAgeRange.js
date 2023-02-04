const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
  const minQuery = Artist.find({})
    .sort({ age: 1 })
    .limit(1)
    .then((artist) => artist[0].age); //? the return is an array of 1 obj [{...}], find return array..
  // ! bad approach because we pull all the instances traverse on them; we always want to minimize our search as possible
  // ! so we prefer  to limit our search instead of returning giant record list
  // ! const minQuery = Artist.find({}).sort({ age: 1 }).then((artist) => artist[0]);
  const maxQuery = Artist.find({})
    .sort({ age: -1 })
    .limit(1)
    .then((artist) => artist[0].age);

  //! we catch promises in the array so in the result obj it will be in the same order
  return Promise.all([minQuery, maxQuery]).then((result) => {
    return { min: result[0], max: result[1] };
  });
};
