import { createPokemonPresenter, PokemonService, inputCreatePokemonSchema } from '../apiServices/pokemon';
import { middyMiddleware } from '../middlewares/middy';

const createPokemon = async (event, context) => {
	try {
		const { name, category, ability } = event.body;

		const pokemonService = new PokemonService();
		const pokemon = await pokemonService.create(name, category, ability);

		return { statusCode: 201, body: createPokemonPresenter(pokemon) };
		
	} catch (error) {
		return { statusCode: 500, body: error.message };
	}
};

const handler = middyMiddleware(createPokemon, inputCreatePokemonSchema);

export { handler };
