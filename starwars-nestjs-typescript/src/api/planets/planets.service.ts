import { PlanetDto, PlanetsDto } from './dto/planets-response.dto';
import { Injectable, Logger } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { SwapiPlanetsService } from '../../providers/swapi/swapi-planets.service';
import { Querys } from '../../common/validator/query.valitador';
import { plainToClass } from 'class-transformer';
import { of } from 'rxjs';

@Injectable()
export class PlanetsService {
	logger: Logger;
	constructor(private readonly swapiService: SwapiPlanetsService) {
		this.logger = new Logger('planer-service');
	}

	getPlanets({ pagina, buscar }: Querys) {
		return this.swapiService
			.getPlanets(pagina, buscar)
			.pipe(
				map((data) => plainToClass(PlanetsDto, data, { excludeExtraneousValues: true })),
				catchError((error, src$) => of({ statusCode: error.status, message: error.message }))
			);
	}

	getPlanetById(id: number) {
		return this.swapiService
			.getPlanetsById(id)
			.pipe(
				map((data) => ({ resultado: plainToClass(PlanetDto, data, { excludeExtraneousValues: true }) })),
				catchError((error, src$) => of({ statusCode: error.status, message: error.message }))
			);
	}
}
