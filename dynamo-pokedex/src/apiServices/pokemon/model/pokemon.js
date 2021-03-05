import { v4 as uuid } from 'uuid';

export class Pokemon {
	constructor(name, category, ability) {
		this.pokemonId = uuid();

		this.name = name;
		this.category = category;
		this.ability = ability;

		const now = new Date();
		this.created = now.toISOString();
		this.updated = now.toISOString();
	}
}
