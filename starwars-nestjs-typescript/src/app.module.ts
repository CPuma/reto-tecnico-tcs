import { PlanetsController } from './api/planets/planets.controller';
import { Controller, Global, Module } from '@nestjs/common';
import { SwappiModule } from './providers/swapi/swapi.module';
import { PlanetsService } from './api/planets/planets.service';

@Global()
@Module({
	imports: [ SwappiModule ],
	controllers: [ PlanetsController ],
	providers: [ PlanetsService ]
})
export class AppModule {}
