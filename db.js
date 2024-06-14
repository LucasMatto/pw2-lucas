import mongoose from "mongoose";
import Bebida from "./models/Bebida.js";

export async function database() {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error de conexión a MongoDB:", error);
    }
}
