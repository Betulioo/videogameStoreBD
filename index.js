const express = require("express");
const { connectDb } = require("./src/utils/database");
const routerVideogames = require("./src/api/routes/videogames.routes");
const routerShops = require("./src/api/routes/shop.routes");
const routesUser = require("./src/api/routes/user.routes");

const env = require("dotenv");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const server = express();

env.config();
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

server.use(cors());

//En este paso añadimos cors y definimos las direcciones que van a tener permiso para utilizar nuestra API. De momento en local:


server.use(express.json());
connectDb();

server.use("/videogames", routerVideogames);

server.use("/shops", routerShops);

server.use("/user", routesUser);


server.disable("x-powered-by");



server.disable('x-powered-by');

const PORT = 5000;
server.listen(PORT, () => {
  console.log("Escuchando por el puerto " + PORT);
});
