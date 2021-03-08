import { Test, TestingModule } from '@nestjs/testing';
import { SwapiPlanetsService } from '../../src/providers/swapi/swapi-planets.service';
import { SwappiModule } from '../../src/providers/swapi/swapi.module';

describe('CatsController', () => {
	let swapiPlanetsService: SwapiPlanetsService;

	beforeAll(async () => {
		const moduleTestin: TestingModule = await Test.createTestingModule({
			imports: [ SwappiModule ]
		}).compile();

		swapiPlanetsService = moduleTestin.get(SwapiPlanetsService);
	});

	describe('getPlanets', () => {
		it('should return an array of planets', (done) => {
			expect.assertions(1);
			swapiPlanetsService.getPlanets().subscribe(
				(response) => {
					expect(typeof response).toBe('object');
					done();
				},
				(error) => done()
			);
		});
	});

	describe('getPlanetsByID', () => {
		it('should return a planet', (done) => {
			expect.assertions(1);
			swapiPlanetsService.getPlanetsById(2).subscribe(
				(response) => {
					expect(typeof response).toBe('object');
					done();
				},
				(error) => done()
			);
		});

		it('should return an error 404', (done) => {
			expect.assertions(1);
            const invalidID = 666999666
			swapiPlanetsService.getPlanetsById(invalidID).subscribe(
				(response) => done(),
				(error) => {
					expect(error.status).toBe(404);
					done();
				}
			);
		});
	});
});
