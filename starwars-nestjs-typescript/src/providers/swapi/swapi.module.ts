import { API_RESPONSE_MESSAGE } from './../../constants/message';
import { HttpModule, HttpService, Module } from '@nestjs/common';
import { SwapiPlanetsService } from './swapi-planets.service';
import { AxiosResponse, AxiosError } from 'axios';

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
	constructor(private readonly httpService: HttpService) {}
	onModuleInit() {
		this.httpService.axiosRef.interceptors.response.use(
			(response: AxiosResponse) => response.data,
			(err: AxiosError) => Promise.reject(this.axiosResponseInterceptorError(err))
		);
	}
	axiosResponseInterceptorError(err: any) {
		let message = API_RESPONSE_MESSAGE.Generic_Error;
		let status = 500;
		if (err.code) message = API_RESPONSE_MESSAGE.Internal_Error;
		if (err.response && err.response.status == 404) {
			message = API_RESPONSE_MESSAGE.Not_Found;
			status = 404;
		}
		return { status, message };
	}
}
