import { Pokemon } from './model/pokemon';
import { PokemonRepository } from './pokemon.repository';

class PokemonService {
	constructor() {
		this.pokemonRepository = PokemonRepository;
	}

	async create(name, category, ability) {
		try {
			const pokemon = new Pokemon(name, category, ability);
			await this.pokemonRepository.register(pokemon);
			return pokemon;
		} catch (error) {
			console.log(error.message);
			throw new Error('Error registrando Pokemon');
		}
	}

	getAll() {
		return this.pokemonRepository.getAll();
	}
	get(pokemonId) {
		return this.pokemonRepository.get(pokemonId);
	}
}

export { PokemonService };
