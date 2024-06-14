import mongoose from "mongoose";
import Bebida from "./models/Bebida.js";

export async function database() {
    try {
        await mongoose.connect("mongodb://mongodb:27017/menu", { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoose.connect("mongodb+srv://ezeedge:" + process.env.DBPASS + "@cluster0.ofuzvtm.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error de conexión a MongoDB:", error);
    }
}
