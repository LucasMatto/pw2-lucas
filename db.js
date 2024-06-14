import mongoose from "mongoose";
import Bebida from "./models/Bebida.js";

export async function database() {
    try {
        await mongoose.connect("mongodb+srv://ezeedge:fAIO1QVJopwofJAd@cluster0.ofuzvtm.mongodb.net/");
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error de conexión a MongoDB:", error);
    }
}
