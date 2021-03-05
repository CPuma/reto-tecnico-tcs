const Joi = require('joi');

const inputGetPokemonSchema = Joi.object({
	pokemonId: Joi.string().guid({ version : 'uuidv4' }).message("PokemonId invalido, debe ser UUIDV4")
});

export { inputGetPokemonSchema };

