import { number } from 'joi';

const Joi = require('joi');
const regexOnlyLetters = new RegExp('^[a-zA-Z\\s]{3,30}$');
const errorMessage = 'Input invalido, deber contener solo Letras y con una longitud  entre 3 a 30 caracteres';

const inputCreatePokemonSchema = Joi.object({
	name: Joi.string().required().pattern(regexOnlyLetters).message(errorMessage),
	category: Joi.string().required().pattern(regexOnlyLetters).message(errorMessage),
	ability: Joi.string().required().pattern(regexOnlyLetters).message(errorMessage)
});

export { inputCreatePokemonSchema };
