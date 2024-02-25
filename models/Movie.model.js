const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Celebrity = require('./Celebrity.model')

const movieSchema = new Schema (
{
    title: {
        type: String
    },
    genre: {
        type: String
    },
    plot: {
        type: String
    },
    cast: {
        type: [mongoose.Types.ObjectId],
        ref: "Celebrity",
    }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;