import mongoose from 'mongoose';

const { Schema } = mongoose;
const LicenceSchema = new Schema({
    enseign: {
        type: String,
        required: true,
    },
    siret: {
        type: String,
        required: true,
    },
    code_naf: {
        type: Number,
        required: true,
    },
    numero_tva: {
        type: Number,
        required: true,
    },
    telephone: {
        type: Number,
        required: true,
    },
    adresse: {
        type: String,
        required: true,
    },
    code_postal: {
        type: Number,
        required: true,
    },
    ville: {
        type: String,
        required: true,
    },
    pays: {
        type: String,
        required: true,
    },
    nombre_postes: {
        type: Number,
        required: true,
    },
    duree_utilisation: {
        type: Number,
        required: true,
    },
    client_email: {
        type: String,
        required: true,
    },
    client_psw: {
        type: String,
        required: true,
    },
    licence: {
        type: String,
        required: true,
    },
    code_licence: {
        type: String,
        required: true,
    },
    etat: {
        type: String,
        required: true,
    },
    site: {
        type: String,
        required: true,
    },
    exercice: {
        type: String,
        required: true,
    },


});


export default mongoose.model('Licence', LicenceSchema);