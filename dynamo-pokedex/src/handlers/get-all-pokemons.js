import { getPokemonsPresenter, PokemonService } from '../apiServices/pokemon';
import { middyMiddleware } from '../middlewares/middy';

const getAllPokemons = async (event, context) => {
	try {

		const pokemonService = new PokemonService();
		const pokemons = await pokemonService.getAll();

		return { statusCode: 200, body: getPokemonsPresenter(pokemons) };

	} catch (error) {
		return { statusCode: 500, body: error.message };

	}
};
const handler = middyMiddleware(getAllPokemons);

export { handler };
