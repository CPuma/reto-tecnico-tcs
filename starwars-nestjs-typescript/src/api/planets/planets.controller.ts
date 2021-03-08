import { ClassSerializerInterceptor, Controller, Get, Param, ParseIntPipe, Query, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { Querys } from '../../common/validator/query.valitador';
import { PlanetsService } from './planets.service';

@Controller('planetas')
export class PlanetsController {
	constructor(private readonly planetsService: PlanetsService) {}

	@Get('')
	getPlanets(@Query() querys: Querys) {
		return this.planetsService.getPlanets(querys);
	}

	@Get(':id')
	getPlanetById(
		@Param('id', ParseIntPipe)
		id: number
	) {
		return this.planetsService.getPlanetById(id);
	}
}
