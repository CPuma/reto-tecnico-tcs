const getPokemonPresenter = (resource) => ({
	PokemonId: resource.pokemonId,
	Name: resource.name,
	Category: resource.category,
	Ability: resource.ability,
	Created: resource.created,
	Updated: resource.updated
});

const getPokemonsPresenter = (resources) => ({
	Count: resources.Count,
	Pokemons: resources.Items ? resources.Items.map((pokemon) => getPokemonPresenter(pokemon)) : []
});

const createPokemonPresenter = (pokemon) => ({
	message: `${pokemon.name} fue registrado exitosamente.`,
	pokemon
});

export { getPokemonPresenter, getPokemonsPresenter, createPokemonPresenter };
