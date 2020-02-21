import Joi from 'joi';
import HttpStatus from 'http-status-codes'; /*name of errors*/
import Licence from '../models/licence.model';



export default {
    findAll(req, res, next) {
        Licence.find()
            .then(licences => res.json(licences))
            .catch(err => res.status( /*err 500*/ HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    create(req, res, next) {
        const schema = Joi.object().keys({
            enseign: Joi.string().required(),
            siret: Joi.string().required(),
            code_naf: Joi.number().required(),
            numero_tva: Joi.number().required(),
            telephone: Joi.number().required(),
            adresse: Joi.string().required(),
            code_postal: Joi.number().required(),
            ville: Joi.string().required(),
            pays: Joi.string().required(),
            nombre_postes: Joi.number().required(),
            duree_utilisation: Joi.number().required(),
            client_email: Joi.string().required(),
            client_psw: Joi.string().required(),
            licence: Joi.string().required(),
            code_licence: Joi.string().required(),
            etat: Joi.string().required(),
            site: Joi.string().required(),
            exercice: Joi.string().required(),

        });
        const { error, value } = Joi.validate(req.body, schema);
        if (error && error.details) {
            return res.json( /*err 400*/ HttpStatus.BAD_REQUEST).json(error);
        }

        Licence.create(value)
            .then(licence => res.json(licence))
            .catch(err => res.status( /*err 500*/ HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    findOne(req, res) {
        const { id } = req.params;
        Licence.findById(id)
            .then(licence => {
                if (!licence) {
                    return res.status(HttpStatus.NOT_FOUND).json({ err: 'not find any licence' });
                }
                return res.json(licence);
            })
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    delete(req, res) {
        const { id } = req.params;
        Licence.findByIdAndRemove(id)
            .then(licence => {
                if (!licence) {
                    return res.status(HttpStatus.NOT_FOUND).json({ err: ' not delete any licence' });
                }
                return res.json(licence);
            })
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },

    update(req, res) {
        const { id } = req.params;
        const schema = Joi.object().keys({
            enseign: Joi.string().optional(),
            siret: Joi.string().optional(),
            code_naf: Joi.number().optional(),
            numero_tva: Joi.number().optional(),
            telephone: Joi.number().optional(),
            adresse: Joi.string().optional(),
            code_postal: Joi.number().optional(),
            ville: Joi.string().optional(),
            pays: Joi.string().optional(),
            nombre_postes: Joi.number().optional(),
            duree_utilisation: Joi.number().optional(),
            client_email: Joi.string().optional(),
            client_psw: Joi.string().optional(),
            licence: Joi.string().optional(),
            code_licence: Joi.string().optional(),
            etat: Joi.string().optional(),
            site: Joi.string().optional(),
            exercice: Joi.string().optional(),
        });
        const { error, value } = Joi.validate(req.body, schema);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
        Licence.findOneAndUpdate({ _id: id }, value, { new: true })
            .then(licence => res.json(licence))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    },



};