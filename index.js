import express from 'express';
import { database } from './db.js';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import multer from 'multer';

const port = process.env.PORT || 3000
const Bebida = mongoose.model("Bebida")

const __dirname = path.dirname(new URL(import.meta.url).pathname);



const app = express();

//database()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static('uploads'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Directorio de destino
    },
    filename: function (req, file, cb) {
      const timestamp = Date.now(); 
      const extname = path.extname(file.originalname); 
      const uniqueName = `${timestamp}${extname}`; 
      cb(null, uniqueName); 
    }
  });

  const upload = multer({ storage: storage });


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '/views/')))

app.get("/", async (req, res) => {

//    const bebidas = await Bebida.find().sort({_id: -1})
//console.log(bebidas)
    res.render("home", {
        bebidas: null // bebidas
    });
  });

  app.get("/crear-bebida", async (req, res) => {
    res.render("crear-bebida");
  });

  app.post("/crear-bebida", upload.single('imagen') ,  async (req, res) => {
    try{
    const nuevaBebida  = req.body

    const nombreImagen = req.file.filename;


    const bebida = new Bebida({...nuevaBebida , imagen: nombreImagen})

    await bebida.save();

    res.redirect('/');
    }
    catch (error) {
        console.error("Error al crear la bebida:", error);
        res.status(500).send("Error al crear la bebida");
    }
});


app.delete("/bebida/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await Bebida.findByIdAndDelete(id);
        res.redirect('/');
    } catch (error) {
        console.error("Error al eliminar la bebida:", error);
        res.status(500).send("Error al eliminar la bebida");
    }
});

app.listen(port);
