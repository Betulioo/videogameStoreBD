const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Importamos el modelo videogame.models.js en este nuevo archivo.
const Videogame = require('../api/models/videogames.model');

const videogames = [{
    "title": "Cool World", 
    "genre": "Acción", 
    "year": 1993,

    "country": "Eu",

  

    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Cool_World_cover.jpg/220px-Cool_World_cover.jpg"
},

{
    "title": "Mighty Morphin Power Rangers", 
    "genre": "Acción", 
    "year": 1993,

    "country": "USA",


    "image": "https://upload.wikimedia.org/wikipedia/en/c/cb/MMPR_Super_NES.jpg"
},

{
    "title": "Mega Man V", 
    "genre": "Acción", 
    "year": 1994,

    "country": "Eu",

  

    "image": "https://thehoganreviews.files.wordpress.com/2018/10/mega-man-v.jpg?w=640"
}, 

{
    "title": "Mario & Yoshi", 
    "genre": "Puzzle", 
    "year": 1992,

    "country": "Eu",

   

    "image": "https://static.wikia.nocookie.net/nintendo/images/3/3f/Mario_and_Yoshi.jpg/revision/latest?cb=20100620185743&path-prefix=en"
}, 

{
    "title": "Mortal Kombat", 
    "genre": "Lucha", 
    "year": 1994,

    "country": "Eu",

    "image": "https://i.ebayimg.com/images/g/gPMAAMXQ0pNQ9fi1/s-l600.jpg"
}, 

{
    "title": "Pokémon Blue Version", 
    "genre": "RPG", 
    "year": 1999,

    "country": "Eu",

    "image": "https://static.wikia.nocookie.net/espokemon/images/9/9d/Car%C3%A1tula_de_Pok%C3%A9mon_Azul.jpg/revision/latest/scale-to-width/360?cb=20160715095744"
}, 

{
    "title": "Pokémon Red Version", 
    "genre": "RPG", 
    "year": 1999,

    "country": "Eu",

    "image": "https://www.retroplace.com/offers/12978623/278111-1.png"
}, 
{
    "title": "Pokémon Yellow Version: Special Pikachu Edition", 
    "genre": "RPG", 
    "year": 2000,

    "country": "Eu",

    "image": "https://static.wikia.nocookie.net/espokemon/images/9/95/Pok%C3%A9mon_Amarillo.png/revision/latest?cb=20160715100157"
}, 
{
    "title": "Superman", 
    "genre": "Acción", 
    "year": 1997,

    "country": "Eu",

    "image": "https://static.wikia.nocookie.net/dcanimated/images/9/93/Smgameboy.png/revision/latest?cb=20190217165130"
}, 
{
    "title": "T2: The Arcade Game", 
    "genre": "Juego de Pistola", 
    "year": 1993,

    "country": "Usa",

    "image": "https://upload.wikimedia.org/wikipedia/en/7/78/Terminator_2_Game_Boy_cover_art.jpg"
}, 
{
    "title": "The Amazing Spider-Man", 
    "genre": "Acción", 
    "year": 1990,

    "country": "Eu",

    "image": "https://upload.wikimedia.org/wikipedia/en/c/cd/Gameboy-AmazingSpiderMan.jpg"
}, 
{
    "title": "The Amazing Spider-Man 2", 
    "genre": "Acción", 
    "year": 1992,

    "country": "Eu",

    "image": "https://assets-prd.ignimgs.com/2022/01/19/spiderman2-gb-sq-1642631612526.jpg"
}, 
{
    "title": "The Legend of Zelda: Link's Awakening", 
    "genre": "Acción, Aventura", 
    "year": 1993,

    "country": "Eu",

    "image": "https://static.wikia.nocookie.net/nintendo/images/e/ed/TLoZ_Link%27s_Awakening_%28NA%29.jpg/revision/latest?cb=20190220020002&path-prefix=es"
}, 
{
    "title": "Who Framed Roger Rabbit", 
    "genre": "Aventura", 
    "year": 1991,

    "country": "Eu",

    "image": "https://www.retroplace.com/pics/gameboy/packshots/34640--who-framed-roger-rabbit.png"
}, 
{
    "title": "Animaniacs", 
    "genre": "Acción", 
    "year": 1995,

    "country": "Usa",

    "image": "https://upload.wikimedia.org/wikipedia/en/b/bf/Animaniacs_SNES_cover_art.jpg"
}, 
{
    "title": "Asterix & Obelix", 
    "genre": "Acción", 
    "year": 1995,

    "country": "Eu",

    "image": "https://i.ytimg.com/vi/xQR3cMSppe8/maxresdefault.jpg"
}, 
{
    "title": "Bart Simpson's Escape from Camp Deadly", 
    "genre": "Acción", 
    "year": 1993,

    "country": "Eu",

    "image": "https://i.ytimg.com/vi/gTj8cu09deE/maxresdefault.jpg"
}, 
{
    "title": "Batman: The Video Game", 
    "genre": "Acción", 
    "year": 1990,

    "country": "Usa",

    "image": "https://static.wikia.nocookie.net/batman/images/8/86/Gameboycover.png/revision/latest?cb=20181025030449"
}, 
{
    "title": "Beetlejuice", 
    "genre": "Acción", 
    "year": 1992,

    "country": "USa",

    "image": "https://cdn.mobygames.com/fc6cba8e-ab9e-11ed-8b70-02420a00019a.webp"
}, 
{
    "title": "Disney's Aladdin", 
    "genre": "Acción", 
    "year": 1993,

    "country": "Usa",

    "image": "https://upload.wikimedia.org/wikipedia/en/f/fd/Disney%27s_Aladdin_%28SNES%29_cover_art.jpg"
} ];

// En este caso, nos conectaremos de nuevo a nuestra base de datos
// pero nos desconectaremos tras insertar los documentos

mongoose.connect(process.env.DB_URL);

mongoose.connect(process.env.DB_URL, { // aqui va el link de mongodb

    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		// Utilizando Videogame.find() obtendremos un array con todos los juegos de la db
    const allVideogames = await Videogame.find();
		
		// Si existen juegos previamente, dropearemos la colección
    if (allVideogames.length) {
      await Videogame.collection.drop(); //La función drop borra la colección
      console.log('Drop database')
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la db de los juegos, usaremos el array videogames
		// para llenar nuestra base de datos con todas los videojuegos.
		await Videogame.insertMany(videogames);
        console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	// Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());





  // node server/api/models/videogames.model.js


  // Si todo ha ido bien debería aparecer en consola el texto: DatabaseCreated