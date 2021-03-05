import { dynamoDB } from '../../infrastructure/dynamo/conection';
const POKEDEX_TABLE = process.env.POKEDEX_TABLE;

export class PokemonRepository {
	static register(pokemon) {
		return dynamoDB
			.put({
				TableName: POKEDEX_TABLE,
				Item: pokemon
			})
			.promise();
	}

	static getAll() {
		return dynamoDB
			.scan({
				TableName: POKEDEX_TABLE
			})
			.promise();
	}

	static get(pokemonId) {
		return dynamoDB
			.get({
				TableName: POKEDEX_TABLE,
				Key: {
					pokemonId
				}
			})
			.promise();
	}
}
