import {  Expose, Transform, Type } from 'class-transformer';
import { PlanetsSwapi, PlanetSwapi } from '../../../providers/swapi/interfaces/planets.interface';
import { replaceURL } from '../../../common/utils/url-transform';

export class PlanetDto {
	@Expose({ name: 'name' })
	nombre: string;

	@Expose({ name: 'diameter' })
	diametro: string;

	@Expose({ name: 'climate' })
	clima: string;

	@Expose({ name: 'gravity' })
	gravedad: string;

	@Expose({ name: 'terrain' })
	terreno: string;

	@Expose({ name: 'population' })
	poblacion: string;

	@Expose({ name: 'surface_water' })
	superficie_agua: string;

	@Expose({ name: 'rotation_period' })
	periodo_rotacion: string;

	@Expose({ name: 'orbital_period' })
	periodo_orbital: string;

	@Expose({ name: 'created' })
	creado: string;

	@Expose({ name: 'edited' })
	editado: string;

	@Expose({ name: 'url' })
	@Transform(({ value }) => replaceURL(value))
	url: string;

	constructor(partial: Partial<PlanetSwapi>) {
		Object.assign(this, partial);
	}
}

export class PlanetsDto {
	@Expose({ name: 'count' })
	contador: number;

	@Expose({ name: 'next' })
	@Transform(({ value }) => replaceURL(value))
	siguiente: string;

	@Expose({ name: 'previous' })
	@Transform(({ value }) => replaceURL(value))
	anterior: any;

	@Expose({ name: 'results' })
	@Type(() => PlanetDto)
	resultados: Array<PlanetSwapi>;

	constructor(partial: Partial<PlanetsSwapi>) {
		Object.assign(this, partial);
	}
}
