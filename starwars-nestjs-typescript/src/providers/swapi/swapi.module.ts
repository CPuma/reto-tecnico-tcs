import { HttpModule,  Module } from '@nestjs/common';
import { SwapiPlanetsService } from './swapi-planets.service';

@Module({
	imports: [
		HttpModule.register({
			baseURL: 'https://swapi.py4e.com/api',
			timeout: 10000,
			maxRedirects: 5,
			validateStatus: (status) => status == 200
		})
	],
	providers: [ SwapiPlanetsService ],
	exports: [ SwapiPlanetsService ]
})
export class SwappiModule {
}
