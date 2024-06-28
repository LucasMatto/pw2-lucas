import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const bebidaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: 'El nombre de la bebida es obligatorio',
        trim: true
    },
    imagen: {
        type: String,
        trim: true
    },
    precio: {
        type: Number,
        trim: true,
        default: 0,
    },
    cantidad: {
        type: Number,
        trim: true,
        default: 0,
    },
});

const Bebida = mongoose.model('Bebida', bebidaSchema);

export default Bebida;
