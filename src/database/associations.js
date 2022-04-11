const Character = require('../modules/character/models/character');
const Film = require('../modules/film/models/film');
const Genre = require('../modules/genre/models/genre');

Character.belongsToMany(Film, { through: 'character_film' , timestamps: false });
Film.belongsToMany(Character, { through: 'character_film' , timestamps: false });

Film.belongsToMany(Genre, { through: 'film_genre' , timestamps: false});
Genre.belongsToMany(Film, { through: 'film_genre' , timestamps: false });
