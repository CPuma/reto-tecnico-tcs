import { Observable, throwError } from 'rxjs';
import { HttpService, Inject, Injectable, UseFilters } from '@nestjs/common';
import { PlanetSwapi, PlanetsSwapi } from './interfaces/planets.interface';
import { SWAPI_CONFIG } from '../../config/configuration';
import { catchError, pluck } from 'rxjs/operators';
import { API_RESPONSE_MESSAGE } from '../../constants/message';
import { ErrorSwapi } from './error/error-swapi';

@Injectable()
export class SwapiPlanetsService {
	constructor(private httpService: HttpService) {}

	getPlanets(page?: number, search?: string): Observable<PlanetsSwapi> {
		return this.httpService
			.get<PlanetsSwapi>(SWAPI_CONFIG.ROUTE_PLANETS, { params: { page, search } })
			.pipe(pluck('data'), catchError((error, src$) => this.errorHandler(error)));
	}
	getPlanetsById(id: number): Observable<PlanetSwapi > {
		return this.httpService
			.get<PlanetSwapi>(`${SWAPI_CONFIG.ROUTE_PLANETS}/${id}`)
			.pipe(pluck('data'), catchError((error, src$) => this.errorHandler(error)));
	}

	private errorHandler(error) {
		let message = API_RESPONSE_MESSAGE.Generic_Error;
		let status = error.status || 500;
		if (error.code) message = API_RESPONSE_MESSAGE.Internal_Error;
		if (error.response && error.response.status == 404) {
			message = API_RESPONSE_MESSAGE.Not_Found;
			status = 404;
		}
		const errorResponse: ErrorSwapi = { status, message };
		return throwError(errorResponse);
	}
}
