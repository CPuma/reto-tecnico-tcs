import { HttpService, Inject, Injectable } from '@nestjs/common';
import { PlanetSwapi, PlanetsSwapi } from './interfaces/planets.interface';
import { SWAPI_CONFIG } from '../../config/configuration';

@Injectable()
export class SwapiPlanetsService {
	constructor(private httpService: HttpService) {}
	getPlanets(page?: number, search?: string) {
		return this.httpService.get<PlanetsSwapi>(SWAPI_CONFIG.ROUTE_PLANETS, { params: { page, search } });
	}
	getPlanetsById(id: number) {
		return this.httpService.get<PlanetSwapi>(`${SWAPI_CONFIG.ROUTE_PLANETS}/${id}`);
	}
}
