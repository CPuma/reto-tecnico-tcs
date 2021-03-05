import { getPokemonPresenter, PokemonService, inputGetPokemonSchema } from '../apiServices/pokemon';
import { middyMiddleware } from '../middlewares/middy';

const getPokemon = async (event, context) => {
	try {
		const {pokemonId} = event.pathParameters;
		console.log(pokemonId)
		const pokemonService = new PokemonService();
		const {Item} = await pokemonService.get(pokemonId);
		if(!Item) return { statusCode: 204 };

		return { statusCode: 200, body: getPokemonPresenter(Item) };
	} catch (error) {
		return { statusCode: 500, body: error.message };
	}
};

const handler = middyMiddleware(getPokemon, inputGetPokemonSchema, "pathParameters" );

export { handler };
